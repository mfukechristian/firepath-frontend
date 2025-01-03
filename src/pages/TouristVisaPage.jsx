import React from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";

function TouristVisaPage() {
  return (
    <Container
      className="d-flex flex-column align-items-center "
      style={{ minHeight: "70vh", padding: "20px", marginTop: "80px" }}
    >
      <h1 className="mb-4 text-center">Tourist Visa Assessment Advisory</h1>
      <Form style={{ width: "100%", maxWidth: "400px" }}>
        {/* Passport Country Field */}
        <Form.Group controlId="formPassportCountry" className="mb-3">
          <Form.Label>Passport Country</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your passport country"
            className="rounded"
          />
        </Form.Group>

        {/* Duration of Stay Dropdown */}
        <Form.Group controlId="formDurationOfStay" className="mb-3">
          <Form.Label>Duration of Stay</Form.Label>
          <Form.Select className="rounded">
            <option value="">Select duration of stay</option>
            <option value="less_than_3_months">Less than 3 months</option>
            <option value="more_than_3_months">More than 3 months</option>
          </Form.Select>
        </Form.Group>

        {/* Submit Button */}
        <div className="d-grid">
          <Button variant="dark" type="submit" className="rounded">
            Ask AI
          </Button>
        </div>
      </Form>
    </Container>
  );
}

export default TouristVisaPage;
