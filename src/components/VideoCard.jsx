import { useState } from "react";
import { Card, Modal } from "react-bootstrap";

export default function VideoCard() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
          src="https://source.unsplash.com/the-walking-dead-dvd-movie-wMkaMXTJjlQ"
        />
        <Card.Body>
          <Card.Title className="d-flex justify-content-between align-items-center">
            <h6>Card Title</h6>
            <button className="btn">
              <i class="fa-solid fa-trash"></i>
            </button>
          </Card.Title>
        </Card.Body>
      </Card>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Video Title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <iframe
            width="100%"
            height="387"
            src="https://www.youtube.com/embed/u8aCas4b9ck?autoplay=1"
            title="[EN] 2023 PMGC Grand Finals | Day 3 | PUBG MOBILE Global Championship"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </Modal.Body>
      </Modal>
    </>
  );
}
