import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div className="container my-5">
      <div className="row align-items-center m-5">
        <div className="col-lg-6 pr-2">
          <h2
            className="pb-5"
            style={{
              fontSize: "clamp(4rem, 10vw, 7rem)",
              lineHeight: ".9",
              fontWeight: "700",
              maxWidth: "10ch",
            }}
          >
            Welcome to{" "}
            <span style={{ color: "var(--clr-primary)" }}>Media Player</span>
          </h2>
          <p
            style={{
              fontSize: "clamp(1rem, 5vw, 1.4rem)",
              maxWidth: "35ch",
            }}
          >
            Media player app will allow us to add and remove their uploaded
            videos, also help them to arrange different category by drag and
            drop
          </p>
          <Link to={"/home"} className="btn btn-secondary fw-bolder mt-4">
            Get Started
          </Link>
        </div>
        <div className="col-lg-6">
          <img
            className="img-fluid"
            src="https://cdn.pixabay.com/animation/2023/10/10/13/26/13-26-45-476_512.gif"
          />
        </div>
      </div>

      <div className="features">
        <h2
          className="text-center m-5"
          style={{
            color: "var(--clr-primary)",
          }}
        >
          Features
        </h2>
        <div className="d-flex justify-content-between">
          {/* card 1 */}
          <Card
            className="border rounded border-primary"
            style={{ width: "18rem", background: "none" }}
          >
            <Card.Img
              width={"230px"}
              height={"230px"}
              variant="top"
              src="https://media1.giphy.com/media/Ru00axlTLzs2gNAVms/giphy.gif?cid=ecf05e474ik9osl71sbb96wn6md0zlrm5ty9ufliqhsg4mun&ep=v1_gifs_search&rid=giphy.gif&ct=g"
            />
            <Card.Body>
              <Card.Title>Managing Videos</Card.Title>
              <Card.Text>User can upload, view and remove the videos</Card.Text>
            </Card.Body>
          </Card>
          {/* card 1 */}
          <Card
            className="border rounded border-primary"
            style={{ width: "18rem", background: "none" }}
          >
            <Card.Img
              width={"230px"}
              height={"230px"}
              variant="top"
              src="https://media1.giphy.com/media/xTk9ZwzuWiyJ8n5Vzq/giphy.gif?cid=ecf05e47bke8n4tal4v8y632r0kpa00r91ibw4zg1qx44vmb&ep=v1_gifs_search&rid=giphy.gif&ct=g"
            />
            <Card.Body>
              <Card.Title>Categorize Video</Card.Title>
              <Card.Text>
                User can categorize videos according to their perfomance using
                drag and drop features.
              </Card.Text>
            </Card.Body>
          </Card>
          {/* card 1 */}
          <Card
            className="border rounded border-primary"
            style={{ width: "18rem", background: "none" }}
          >
            <Card.Img
              variant="top"
              width={"230px"}
              height={"230px"}
              src="https://media4.giphy.com/media/l4o9J4SfCUgqQ/giphy.gif?cid=ecf05e4718ucu9a8mywnzf9m2qqh9papgm32v2hpfzbj7q73&ep=v1_gifs_related&rid=giphy.gif&ct=g"
            />
            <Card.Body>
              <Card.Title>Watch History</Card.Title>
              <Card.Text>
                User are able to see the histroy of watched videos.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>

      <div className="row mt-5 border rounded border-primary align-items-center p-5">
        <div className="col-lg-5">
          <h3 className="mb-5">Simple, Fast and Powerful</h3>
          <p style={{ textAlign: "justify" }}>
            <span className="fs-5">Play Everything: </span>
            Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
            cillum sint consectetur cupidatat
          </p>
          <p style={{ textAlign: "justify" }}>
            <span className="fs-5">Categorize Video: </span>
            Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
            cillum sint consectetur cupidatat
          </p>
          <p style={{ textAlign: "justify" }}>
            <span className="fs-5">Watch Everything: </span>
            Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
            cillum sint consectetur cupidatat
          </p>
        </div>
        <div className="col-lg-1"></div>
        <div className="col-lg-6">
          <iframe
            width="688"
            height="387"
            src="https://www.youtube.com/embed/u8aCas4b9ck"
            title="[EN] 2023 PMGC Grand Finals | Day 3 | PUBG MOBILE Global Championship"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          />
        </div>
      </div>
    </div>
  );
}
