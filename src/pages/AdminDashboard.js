import React from "react";
import { Container, Row, Col, Card, ListGroup } from "react-bootstrap";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import "./AdminDashboard.css";

const data = [
  { name: "Jan", users: 400 },
  { name: "Feb", users: 300 },
  { name: "Mar", users: 500 },
  { name: "Apr", users: 450 },
  { name: "May", users: 600 },
];

const AdminDashboard = () => {
  return (
    <Container fluid>
      {/* Navbar */}
      {/* <div className="navbar">
        <nav>
          <ul>
            <li>Home</li>
            <li>Blog</li>
            <li>Destinations</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
      </div> */}

      {/* Dashboard Content */}
      <Row className="mt-4 card-row">
  <Card className="dashboard-card">
    <Card.Body>
      <Card.Title>Number of Visitors</Card.Title>
      <Card.Text>10</Card.Text>
    </Card.Body>
  </Card>
  <Card className="dashboard-card">
    <Card.Body>
      <Card.Title>Number of Guides</Card.Title>
      <Card.Text>5</Card.Text>
    </Card.Body>
  </Card>
  <Card className="dashboard-card">
    <Card.Body>
      <Card.Title>Number of Bloggers</Card.Title>
      <Card.Text>2</Card.Text>
    </Card.Body>
  </Card>
</Row>

<Row className="mt-4">
  <Col md={4} className="user-list">
    <Card>
      <Card.Body>
        <Card.Title>All Users</Card.Title>
        <ListGroup variant="flush">
          <ListGroup.Item>Visitor 1</ListGroup.Item>
          <ListGroup.Item>Guide 1</ListGroup.Item>
          <ListGroup.Item>Blogger 1</ListGroup.Item>
        </ListGroup>
      </Card.Body>
    </Card>
  </Col>

  <Col md={8}>
    <div className="chart-card">
      <h5 className="card-title">Registered Users Over Time</h5>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="users" stroke="#0d6efd" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  </Col>
</Row>

    </Container>
  );
};

export default AdminDashboard;
