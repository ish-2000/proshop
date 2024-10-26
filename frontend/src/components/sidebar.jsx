// src/components/Sidebar.jsx
import React, { useState } from "react";
import { Offcanvas, Nav, Button } from "react-bootstrap";

const Sidebar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="dark" onClick={handleShow} className="mb-3">
        ☰
      </Button>

      <Offcanvas show={show} onHide={handleClose} placement="start">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Proshop</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column">
            <Nav.Link href="/cart">Cart</Nav.Link>
            <Nav.Link href="/login">Sign In</Nav.Link>
            <Nav.Link href="/help">Help</Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Sidebar;
