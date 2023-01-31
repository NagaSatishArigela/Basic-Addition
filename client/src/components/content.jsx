import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Content = () => {
  return (
    <Container className="mt-4">
      <Row className="mt-8">
        <Col sm={4}>
          <img src="https://www.morepowerfulnc.org/wp-content/uploads/2018/10/300x300-1.png" />
        </Col>
        <Col sm={8}>
          <h1 className="text-justify">James Smith</h1>
          <p className="text-justify">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Content;
