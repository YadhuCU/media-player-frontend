/* eslint-disable react/prop-types */
import { Row, Col } from "react-bootstrap";
import VideoCard from "./VideoCard";
import { useState, useEffect } from "react";

import {
  getAllCategoryAPI,
  getAllVideoAPI,
  updateCategoryAPI,
} from "../services/allAPI";

export default function View({ uploadVideoResponse, setResponse }) {
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

  const videoDroped = async (e) => {
    const { videoId, categoryId } = JSON.parse(e.dataTransfer.getData("data"));

    try {
      const { data } = await getAllCategoryAPI();
      const category = data.find((item) => item.id == categoryId);
      const newAllVideos = category.allVideo.filter(
        (item) => item.id != videoId,
      );
      const { id } = category;
      try {
        const result = await updateCategoryAPI(id, {
          ...category,
          allVideo: newAllVideos,
        });
        setResponse(result);
      } catch (err) {
        console.log("videoDroped updateCategoryAPI err: ", err);
      }
    } catch (err) {
      console.log("videoDroped getAllCategoryAPI err: ", err);
    }
  };

  return (
    <>
      <Row
        droppable="true"
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => videoDroped(e)}
      >
        {allVideos?.length > 0 ? (
          allVideos.map((video, index) => (
            <Col key={index} sm={10} md={6} lg={4} xl={3}>
              <VideoCard video={video} setDeleteResponse={setDeleteResponse} />
            </Col>
          ))
        ) : (
          <p className="text-warning">Nothing uploaded yet.. Add Video</p>
        )}
      </Row>
    </>
  );
}
