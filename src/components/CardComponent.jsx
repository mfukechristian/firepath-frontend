import React from "react";
import { Card } from "react-bootstrap";

function CardComponent({ title, description }) {
  return (
    <Card
      style={{
        border: "1px solid #ccc",
        height: "300px",
        width: "300px",
        transition: "background-color 0.3s, color 0.3s",
      }}
      className="hover-card"
    >
      <Card.Body>
        <Card.Title
          className="mb-3"
          style={{
            fontWeight: "500",
            fontSize: "1.5rem",
            textTransform: "uppercase",
          }}
        >
          {title}
        </Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default CardComponent;
