import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="container w-100 my-3">
      <div className="footer-content d-flex justify-content-between">
        <div className="title d-flex flex-column">
          <h3>
            <i className="fa-solid fa-photo-film me-2" />
            <span className="">Media Player</span>
          </h3>
          <p className="text-secondary" style={{ maxWidth: "32ch" }}>
            Designed and build with all the love in the world by the Bootstrap
            team with help of our contributers.
          </p>
          <p className="text-secondary">
            Code licenced by MIT, docs CC By 3.0,
          </p>
          <p className="text-secondary">Currently v5.3.2</p>
        </div>
        <div className="links d-flex flex-column">
          <h3>Links</h3>
          <Link
            to={"/"}
            style={{ textDecoration: "none" }}
            className="text-secondary"
          >
            Landing page
          </Link>
          <Link
            to={"/home"}
            style={{ textDecoration: "none" }}
            className="text-secondary"
          >
            Home
          </Link>
          <Link
            to={"/history"}
            style={{ textDecoration: "none" }}
            className="text-secondary"
          >
            Watch History
          </Link>
        </div>
        <div className="guides  d-flex flex-column">
          <h3>Guides</h3>
          <a
            className="text-secondary"
            href="https://react.dev/"
            target="_blank"
            style={{ textDecoration: "none" }}
            rel="noreferrer"
          >
            React
          </a>
          <a
            className="text-secondary"
            href="https://react-bootstrap.netlify.app/"
            target="_blank"
            style={{ textDecoration: "none" }}
            rel="noreferrer"
          >
            React Bootstrap
          </a>
          <a
            className="text-secondary"
            href="https://www.w3schools.com/react/react_router.asp"
            target="_blank"
            style={{ textDecoration: "none" }}
            rel="noreferrer"
          >
            React Routing
          </a>
        </div>
        <div className="contact d-flex flex-column">
          <h3>Contact Us</h3>
          <Form>
            <InputGroup>
              <Form.Control type="email" placeholder="Enter your Email" />
              <Button type="submit" variant="secondary">
                <i className="fa-solid fa-arrow-right" />
              </Button>
            </InputGroup>
          </Form>
          <div
            style={{ width: "100%", fontSize: "1.8rem" }}
            className="d-flex justify-content-between my-3"
          >
            <a
              style={{ color: "inherit" }}
              target="_blank"
              href="https://mail.google.com"
              rel="noreferrer"
            >
              <i className="fa-solid fa-envelope" />
            </a>
            <a
              target="_blank"
              style={{ color: "inherit" }}
              href="https://twitter.com"
              rel="noreferrer"
            >
              <i className="fa-brands fa-twitter" />
            </a>
            <a
              target="_blank"
              style={{ color: "inherit" }}
              href="https://instagram.com"
              rel="noreferrer"
            >
              <i className="fa-brands fa-instagram" />
            </a>
            <a
              target="_blank"
              style={{ color: "inherit" }}
              href="https://facebook.com"
              rel="noreferrer"
            >
              <i className="fa-brands fa-facebook" />
            </a>
            <a
              target="_blank"
              style={{ color: "inherit" }}
              href="https://github.com"
              rel="noreferrer"
            >
              <i className="fa-brands fa-github" />
            </a>
            <a
              target="_blank"
              style={{ color: "inherit" }}
              href="https://in.linkedin.com"
              rel="noreferrer"
            >
              <i className="fa-brands fa-linkedin" />
            </a>
          </div>
        </div>
      </div>
      <p className="text-center">
        Copyrights &copy; 2023 Media player build with React.
      </p>
    </div>
  );
}
