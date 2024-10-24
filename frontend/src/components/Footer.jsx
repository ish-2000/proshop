import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-dark text-white mt-5">
      <Container>
        <Row className="py-4">
          <Col md={4} className="mb-3">
            <h5>About Proshop</h5>
            <p>
              Proshop is your one-stop shop for the best deals in electronics,
              fashion, and more. Shop with confidence and discover the latest
              trends at unbeatable prices.
            </p>
          </Col>
          <Col md={4} className="mb-3">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-white">
                  Shop
                </a>
              </li>
              <li>
                <a href="#" className="text-white">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-white">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </Col>
          <Col md={4} className="mb-3">
            <h5>Contact Us</h5>
            <p>Email: info@proshop.com</p>
            <p>Phone: +123 456 7890</p>
            <div className="d-flex">
              <a href="#" className="text-white me-3">
                <FaFacebookF />
              </a>
              <a href="#" className="text-white me-3">
                <FaTwitter />
              </a>
              <a href="#" className="text-white me-3">
                <FaInstagram />
              </a>
              <a href="#" className="text-white">
                <FaLinkedin />
              </a>
            </div>
          </Col>
        </Row>
        <Row className="text-center py-3 border-top border-light">
          <Col>
            <p className="mb-0">
              &copy; {new Date().getFullYear()} Proshop. All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
