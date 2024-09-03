import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';

function App() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [message, setMessage] = useState('');

  const calculateBMI = () => {
    if (weight && height) {
      const heightInMeters = height / 100;
      const calculatedBMI = (weight / (heightInMeters * heightInMeters)).toFixed(2);
      setBmi(calculatedBMI);
      getBmiMessage(calculatedBMI);
    } else {
      alert('Please enter both weight and height!');
    }
  };

  const getBmiMessage = (bmi) => {
    if (bmi < 18.5) {
      setMessage('Underweight');
    } else if (bmi >= 18.5 && bmi < 24.9) {
      setMessage('Normal weight');
    } else if (bmi >= 25 && bmi < 29.9) {
      setMessage('Overweight');
    } else {
      setMessage('Obesity');
    }
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col xs={12} md={6}>
          <h1 className="text-center mb-4">BMI Calculator</h1>
          <Form>
            <Form.Group className="mb-3" controlId="formWeight">
              <Form.Label>Weight (kg)</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter your weight"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formHeight">
              <Form.Label>Height (cm)</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter your height"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
              />
            </Form.Group>

            <Button variant="primary" onClick={calculateBMI}>
              Calculate BMI
            </Button>
          </Form>

          {bmi && (
            <Alert className="mt-4" variant="info">
              Your BMI is: <strong>{bmi}</strong> - {message}
            </Alert>
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default App;
