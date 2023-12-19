import { useState } from "react";
import Add from "../components/Add.jsx";
import Category from "../components/Category.jsx";
import View from "../components/View.jsx";

import { Link } from "react-router-dom";

export default function Home() {
  const [uploadVideoResponse, setUploadVideoResponse] = useState({});
  return (
    <>
      <div className="container my-5 d-flex justify-content-between">
        <div className="add-videos">
          <Add setUploadVideoResponse={setUploadVideoResponse} />
        </div>
        <Link
          to={"/history"}
          style={{
            textDecoration: "none",
            fontSize: "1.5rem",
            color: "inherit",
            gap: "1rem",
          }}
          className="d-flex align-items-center"
        >
          Watch History <i className="fa-solid fa-clock-rotate-left" />
        </Link>
      </div>
      <div className="container-fluid my-5 row w-100">
        <div className="all-videos col-lg-9">
          <h2>All uploaded Videos</h2>
          <View uploadVideoResponse={uploadVideoResponse} />
        </div>
        <div className="category col-lg-3">
          <Category />
        </div>
      </div>
    </>
  );
}
