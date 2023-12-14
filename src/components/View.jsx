import { Row, Col } from "react-bootstrap";
import VideoCard from "./VideoCard";

export default function View() {
  return (
    <>
      <Row>
        <Col sm={10} md={6} lg={4} xl={3}>
          <VideoCard />
        </Col>
      </Row>
    </>
  );
}
