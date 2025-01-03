import React from "react";
import { Container, Form, Button } from "react-bootstrap";

function WorkVisaPage() {
  return (
    <Container
      className="d-flex flex-column align-items-center"
      style={{ minHeight: "70vh", padding: "20px", marginTop: "80px" }}
    >
      <h1 className="mb-4 text-center">Work Visa Assessment Advisory</h1>
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

        {/* Job Offer Dropdown */}
        <Form.Group controlId="formJobOffer" className="mb-3">
          <Form.Label>Job Offer</Form.Label>
          <Form.Select className="rounded">
            <option value="">Select job offer status</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
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

export default WorkVisaPage;
