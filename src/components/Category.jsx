import { useState } from "react";
import { Modal, Form, Button, FloatingLabel } from "react-bootstrap";

export default function Category() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="grid">
        <Button variant="primary" onClick={handleShow}>
          Launch static backdrop modal
        </Button>
      </div>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Form>
          <Modal.Header closeButton>
            <Modal.Title>Modal title</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Control
              className="bg-dark text-secondary"
              type="text"
              placeholder="Category Name"
            />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <Button type="submit" variant="primary">
              Add
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}
