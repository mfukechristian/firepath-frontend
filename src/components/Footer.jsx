import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <Container>
        <Row>
          <Col className="text-center py-3">
            <p>
              &copy;{" "}
              <a
                href="https://www.linkedin.com/in/christian-mfuke-kambulu/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none", color: "#000" }}
              >
                Christian Mfuke
              </a>{" "}
              {currentYear}
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
export default Footer;
