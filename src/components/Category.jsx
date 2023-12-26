import { useState, useEffect } from "react";
import { Modal, Form, Button, Row, Col, Collapse } from "react-bootstrap";
import {
  addCategoryAPI,
  getAllCategoryAPI,
  getVideoAPI,
  removeCategoryAPI,
  updateCategoryAPI,
} from "../services/allAPI";
import VideoCard from "./VideoCard";

// eslint-disable-next-line react/prop-types
export default function Category({ response }) {
  const [show, setShow] = useState(false);
  const [categoryName, setCategoryName] = useState("");
  const [allCategories, setAllCategories] = useState([]);
  const [collapseCategory, setCollapseCategory] = useState({});

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    getAllCategories();
  }, [response]);

  const getAllCategories = async () => {
    try {
      const result = await getAllCategoryAPI();
      setAllCategories(result.data);
    } catch (err) {
      console.log("getAllCategories Err: ", err);
    }
  };
  const handleAdd = async () => {
    if (!categoryName) alert("Pleace fill the form completely..");
    else {
      try {
        const result = await addCategoryAPI({ categoryName, allVideo: [] });
        if (result.status >= 200 && result.status < 300) {
          setCategoryName("");
          getAllCategories();
          handleClose();
        } else console.log("Response Err: ", result.message);
      } catch (err) {
        console.log("handleAdd err: ", err);
      }
    }
  };

  const removeCategory = async (id) => {
    try {
      await removeCategoryAPI(id);
      getAllCategories();
    } catch (err) {
      console.log("removeCategory Err: ", err);
    }
  };

  const videoDrop = async (e, categoryId) => {
    const videoId = e.dataTransfer.getData("videoId");
    try {
      const { data } = await getVideoAPI(videoId);
      const category = allCategories.find((item) => item.id === categoryId);
      category.allVideo.push(data);
      try {
        await updateCategoryAPI(categoryId, category);
        getAllCategories();
      } catch (err) {
        console.log("videoDrop updateCategoryAPI err: ", err);
      }
    } catch (err) {
      console.log("VideoDrop getVideoAPI err: ", err);
    }
  };

  const videoDragStarted = (e, videoId, categoryId) => {
    const data = { videoId, categoryId };
    e.dataTransfer.setData("data", JSON.stringify(data));
  };

  const handleCollaps = (categoryName) => {
    setCollapseCategory((prev) => {
      if (!prev[categoryName]) return { ...prev, [categoryName]: true };
      else return { ...prev, [categoryName]: false };
    });
  };

  return (
    <>
      <div className="row">
        <Button variant="primary" onClick={handleShow}>
          Category
        </Button>
        {allCategories?.length > 0 ? (
          allCategories.map((item, index) => (
            <div
              key={index}
              className="rounded border border-secondary p-2 mt-2"
              // eslint-disable-next-line react/no-unknown-property
              droppable="true"
              onDragOver={(e) => e.preventDefault()}
              onDrop={(e) => videoDrop(e, item?.id)}
            >
              <div
                onClick={() => handleCollaps(item?.categoryName)}
                className="d-flex justify-content-between align-items-center border-bottom border-primary"
              >
                <h4>{item.categoryName}</h4>
                <button
                  onClick={() => removeCategory(item?.id)}
                  className="btn"
                >
                  <i className="fa-solid fa-trash fa-danger"></i>
                </button>
              </div>
              <Collapse in={collapseCategory[item?.categoryName]}>
                <Row>
                  {item?.allVideo?.length > 0
                    ? item.allVideo.map((video, index) => (
                        <Col
                          draggable
                          onDragStart={(e) =>
                            videoDragStarted(e, video.id, item.id)
                          }
                          key={index}
                          sm={12}
                          className="my-2"
                        >
                          <VideoCard video={video} insideCategory={true} />
                        </Col>
                      ))
                    : null}
                </Row>
              </Collapse>
            </div>
          ))
        ) : (
          <p>No item added to the category..</p>
        )}
      </div>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Control
            className="bg-dark text-secondary"
            type="text"
            placeholder="Category Name"
            onChange={(e) => setCategoryName(e.target.value)}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleAdd}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
