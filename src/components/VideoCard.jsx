/* eslint-disable react/prop-types */
import { useState } from "react";
import { addToHistoryAPI, deleteVideoAPI } from "../services/allAPI";
import { Card, Modal } from "react-bootstrap";

export default function VideoCard({
  video,
  setDeleteResponse,
  insideCategory = false,
}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async () => {
    setShow(true);
    // generate data to store to json-server.
    const { caption, videoURL } = video;
    let today = new Date();
    let timeStamp = today.toLocaleString();

    const videoHistory = {
      caption,
      videoURL,
      timeStamp,
    };
    await addToHistoryAPI(videoHistory);
  };

  const removeVideo = async (id) => {
    try {
      await deleteVideoAPI(id);
      setDeleteResponse(true);
    } catch (err) {
      console.log("setDeleteResponse Err: ", err);
    }
  };

  const dragStarted = (e, id) => {
    e.dataTransfer.setData("videoId", id);
  };

  return (
    <>
      <Card
        className="my-3"
        draggable
        onDragStart={(e) => dragStarted(e, video?.id)}
      >
        <Card.Img
          onClick={handleShow}
          height={"200px"}
          style={{
            objectFit: "cover",
          }}
          variant="top"
          src={video?.imageURL}
        />
        <Card.Body>
          <Card.Title className="d-flex justify-content-between align-items-center">
            <h6>{video?.caption}</h6>
            {insideCategory || (
              <button className="btn">
                <i
                  onClick={() => removeVideo(video?.id)}
                  className="fa-solid fa-trash"
                ></i>
              </button>
            )}
          </Card.Title>
        </Card.Body>
      </Card>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{video?.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <iframe
            width="100%"
            height="387"
            src={`${video?.videoURL}?autoplay=1`}
            title={video?.caption}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            frameBorder="0"
            allowFullScreen
          />
        </Modal.Body>
      </Modal>
    </>
  );
}
