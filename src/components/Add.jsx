import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { addNewVideoAPI } from "../services/allAPI";

export default function Add({ setUploadVideoResponse }) {
  const [show, setShow] = useState(false);
  const [uploadVideo, setUploadVideo] = useState({
    caption: "",
    imageURL: "",
    videoURL: "",
  });

  const handleVideoULR = (e) => {
    const { value } = e.target;

    if (value.includes("v=")) {
      let videoId = value.split("v=")[1].slice(0, 11);
      setUploadVideo({
        ...uploadVideo,
        videoURL: `https://youtube.com/embed/${videoId}`,
      });
    } else {
      setUploadVideo({
        ...uploadVideo,
        videoURL: "",
      });
    }
  };

  const handleUpload = async () => {
    const { caption, imageURL, videoURL } = uploadVideo;

    if (!caption || !imageURL || !videoURL) {
      alert("Uploading form is icomplete. Please fill completely..");
    } else {
      try {
        const result = await addNewVideoAPI(uploadVideo);
        if (result.status >= 200 && result.status < 300) {
          handleClose();
          setUploadVideo({
            caption: "",
            imageURL: "",
            videoURL: "",
          });
          setUploadVideoResponse(result.data);
        } else {
          console.log("handleUpload err:", result.message);
        }
      } catch (err) {
        console.log("handleUpload API err: ", err);
      }
    }
  };

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
            paddingLeft: "5px",
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
        <Modal.Header closeButton>
          <Modal.Title>Upload New Video</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Please Fill the details.</p>
          <Form.Control
            className="bg-dark text-secondary my-3"
            type="text"
            placeholder="Video Caption"
            onChange={(e) =>
              setUploadVideo({ ...uploadVideo, caption: e.target.value })
            }
          />
          <Form.Control
            className="bg-dark text-secondary my-3"
            type="text"
            placeholder="Video ImageURL"
            onChange={(e) =>
              setUploadVideo({ ...uploadVideo, imageURL: e.target.value })
            }
          />
          <Form.Control
            className="bg-dark text-secondary my-3"
            type="text"
            placeholder="Video Youtube Link"
            color="inherit"
            onChange={(e) => handleVideoULR(e)}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleUpload} variant="primary">
            Upload
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
