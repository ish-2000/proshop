import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/sidebar";

function App() {
  return (
    <>
      <Header />
      <main className="py-3">
        <Container fluid>
          <Row>
            <Col xs={3} md={2}>
              {" "}
              {/* Adjust the width of the sidebar as needed */}
              <Sidebar />
            </Col>
            <Col xs={9} md={10}>
              {" "}
              {/* Adjust the width of the main content as needed */}
              <h1>Welcome to Proshop</h1>
              <p>hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh</p>
            </Col>
          </Row>
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default App;
