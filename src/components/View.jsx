import { Row, Col } from "react-bootstrap";
import VideoCard from "./VideoCard";
import { useState, useEffect } from "react";

import { getAllVideoAPI } from "../services/allAPI";

export default function View({ uploadVideoResponse }) {
  const [deleteResponse, setDeleteResponse] = useState(false);
  const [allVideos, setAllVideos] = useState([]);

  useEffect(() => {
    getUploadedVideos();
    setDeleteResponse(false);
  }, [uploadVideoResponse, deleteResponse]);

  const getUploadedVideos = async () => {
    try {
      const result = await getAllVideoAPI();
      if (result.status === 200) {
        setAllVideos(result.data);
      } else {
        console.log("getUploadedVideos err: ", result.message);
      }
    } catch (err) {
      console.log("getUploadedVideos API err: ", err);
    }
  };

  return (
    <>
      <Row>
        {allVideos?.length > 0 ? (
          allVideos.map((video, index) => (
            <Col key={index} sm={10} md={6} lg={4} xl={3}>
              <VideoCard video={video} setDeleteResponse={setDeleteResponse} />
            </Col>
          ))
        ) : (
          <p className="text-warning">Loding....</p>
        )}
      </Row>
    </>
  );
}
