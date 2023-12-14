import { Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <Navbar className="bg-primary">
      <Container>
        <Navbar.Brand
          className="fw-bolder text-secondary"
          style={{
            fontSize: "25px",
          }}
        >
          <Link
            to={"/"}
            className="text-secondary"
            style={{ textDecoration: "none" }}
          >
            <i className="fa-solid fa-photo-film me-2" />
            <span className="">Media Player</span>
          </Link>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}
