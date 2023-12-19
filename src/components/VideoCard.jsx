import { useState } from "react";
import { addToHistoryAPI } from "../services/allAPI";
import { Card, Modal } from "react-bootstrap";

export default function VideoCard({ video }) {
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

  return (
    <>
      <Card className="my-3">
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
            <button className="btn">
              <i className="fa-solid fa-trash"></i>
            </button>
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
