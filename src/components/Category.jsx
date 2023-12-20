import { useState, useEffect } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import {
  addCategoryAPI,
  getAllCategoryAPI,
  removeCategoryAPI,
} from "../services/allAPI";

export default function Category() {
  const [show, setShow] = useState(false);
  const [categoryName, setCategoryName] = useState("");
  const [allCategories, setAllCategories] = useState([]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    getAllCategories();
  }, [categoryName]);

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
            >
              <div className="d-flex justify-content-between align-items-center">
                <h4>{item.categoryName}</h4>
                <button
                  onClick={() => removeCategory(item?.id)}
                  className="btn"
                >
                  <i className="fa-solid fa-trash fa-danger"></i>
                </button>
              </div>
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
