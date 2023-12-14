import { Link } from "react-router-dom";
import { Table } from "react-bootstrap";

export default function WatchHistory() {
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
            <tr>
              <td>1</td>
              <td>Vidoe Title</td>
              <td>
                <a
                  href="https://www.youtube.com/watch?v=Ym-b37of5u8"
                  target="_blank"
                >
                  https://www.youtube.com/watch?v=Ym-b37of5u8
                </a>
              </td>
              <td>13/12/2023</td>
              <td className="d-flex justify-content-center">
                <i class="fa-solid fa-trash"></i>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </>
  );
}
