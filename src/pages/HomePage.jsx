import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CardComponent from "../components/CardComponent";
import { Link } from "react-router-dom";

function HomePage() {
  const cards = [
    {
      title: "Visit",
      description:
        "Explore South Africa's destinations and plan the trip of a lifetime.",
      route: "/tourist-visa",
    },
    {
      title: "Live and Work",
      description:
        "Discover what you need to know about living, working, and moving to South Africa.",
      route: "/work-visa",
    },
    {
      title: "Study",
      description: "Looking to study or currently studying in South Africa.",
      route: "/study-visa",
    },
    {
      title: "Live Permanently",
      description:
        "Learn how to live permanently in South Africa and make it your home.",
      route: "/permanent-residency",
    },
  ];

  return (
    <div
      style={{
        minHeight: "70vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Container>
        <Row
          style={{
            width: "50%",
            margin: "0 auto",
          }}
          xs={1}
          sm={2}
          md={2}
          className="gy-2 gx-2"
        >
          {cards.map((card, index) => (
            <Col key={index} className="d-flex justify-content-center">
              <Link
                to={card.route}
                style={{
                  textDecoration: "none",
                  width: "80%",
                  maxWidth: "280px",
                }}
              >
                <CardComponent
                  title={card.title}
                  description={card.description}
                />
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default HomePage;
