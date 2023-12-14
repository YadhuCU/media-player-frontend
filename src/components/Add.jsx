import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import Form from "react-bootstrap/Form";

export default function Add() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className="d-flex align-items-cente">
        <h3>Upload new Video</h3>
        <button
          onClick={handleShow}
          style={{
            background: "none",
            border: "none",
            fontSize: "1.5rem",
            color: "inherit",
            paddingLeft: "5px"
          }}
        >
          <i className="fa-solid fa-upload"></i>
        </button>
      </div>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Form>
          <Modal.Header closeButton>
            <Modal.Title>Upload New Video</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Please Fill the details.</p>
            <Form.Control
              className="bg-dark text-secondary my-3"
              type="text"
              placeholder="Uploading video Id"
            />
            <Form.Control
              className="bg-dark text-secondary my-3"
              type="text"
              placeholder="Uploading video Caption"
            />
            <Form.Control
              className="bg-dark text-secondary my-3"
              type="text"
              placeholder="Uploading video ImageURL"
            />
            <Form.Control
              className="bg-dark text-secondary my-3"
              type="text"
              placeholder="Uploading video Youtube Link"
              color="inherit"
            />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cancle
            </Button>
            <Button variant="primary" type="submit">
              Upload
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}
