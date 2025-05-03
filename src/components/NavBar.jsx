import { Container, Nav, Navbar } from "react-bootstrap";

import { useEffect, useState } from "react";
import { Link } from "react-router";

export default function NavBar() {
  useEffect(() => {}, []);

  return (
    <section className="bg-gray-50 dark:bg-gray-950">
      <div>
        <div className="border border-r-0 border-l-0 border-gray-200 dark:border-gray-600">
          <Navbar bg="dark" data-bs-theme="dark">
            <Container>
              <Navbar.Brand href="#home">Ecommmerce App</Navbar.Brand>
              <Nav className="ms-auto">
                <Link className="nav-link" to="/">
                  Home
                </Link>
                <Link className="nav-link" to="/Cart">
                  Cart
                </Link>
              </Nav>
            </Container>
          </Navbar>
        </div>
      </div>
    </section>
  );
}
