import { Link } from "react-router-dom";
import { Table } from "react-bootstrap";
import { useState, useEffect } from "react";
import { getFromHistoryAPI, removeFromHistoryAPI } from "../services/allAPI";

export default function WatchHistory() {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    getHistory();
  }, []);

  const getHistory = async () => {
    const result = await getFromHistoryAPI();

    if (result.status === 200) {
      setHistory(result.data);
    } else {
      console.log("API Failed");
      console.log(result.message);
    }
  };

  const removeHistoryItem = async (id) => {
    try {
      await removeFromHistoryAPI(id);
      getHistory();
    } catch (err) {
      console.log("removeFromHistoryAPI Err: ", err);
    }
  };

  return (
    <>
      <div className="container my-5 d-flex justify-content-between">
        <div className="watch-history">
          <h2>Watch History</h2>
        </div>
        <Link
          to={"/home"}
          style={{
            textDecoration: "none",
            fontSize: "1.5rem",
            color: "inherit",
            gap: "1rem",
          }}
          className="d-flex align-items-center"
        >
          <i className="mr-5 fa-solid fa-arrow-left" />
          Back to Home
        </Link>
      </div>
      <div className="container">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Caption</th>
              <th>URL</th>
              <th>TimeStamp</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {history?.length > 0 ? (
              history.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.caption}</td>
                  <td>
                    <a href={item.videoURL} target="_blank">
                      {item.videoURL}
                    </a>
                  </td>
                  <td>{item.timeStamp}</td>
                  <td className="d-flex justify-content-center">
                    <i
                      onClick={() => removeHistoryItem(item?.id)}
                      className="fa-solid fa-trash"
                    ></i>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td>
                  <p className="h3 text-warning">Watch history is empty...!!</p>
                </td>
              </tr>
            )}
          </tbody>
        </Table>
      </div>
    </>
  );
}
