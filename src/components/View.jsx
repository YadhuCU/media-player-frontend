import { Row, Col } from "react-bootstrap";
import VideoCard from "./VideoCard";
import { useState, useEffect } from "react";

import { getAllVideoAPI } from "../services/allAPI";

export default function View({ uploadVideoResponse }) {
  console.log("mounting..");
  const [allVideos, setAllVideos] = useState([]);

  console.log(uploadVideoResponse);
  useEffect(() => {
    console.log("in useEffect..hook");
    getUploadedVideos();
    console.log("in useEffect..hook 1");
  }, [uploadVideoResponse]);

  const getUploadedVideos = async () => {
    try {
      const result = await getAllVideoAPI();
      console.log("getUploadedVideos result: ", result);
      if (result.status === 200) {
        setAllVideos(result.data);
        console.log("getUploadedVideos status 200: ");
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
              <VideoCard video={video} />
            </Col>
          ))
        ) : (
          <p className="text-warning">Loding....</p>
        )}
      </Row>
    </>
  );
}
