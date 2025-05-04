import { Badge, Container, Nav, Navbar } from "react-bootstrap";

import { useEffect, useState } from "react";
import { Link } from "react-router";
import { useSelector } from "react-redux";

export default function NavBar() {
  const cartItems = useSelector((state) => state.cart.items);
  const cartCount = cartItems.length;

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
                <Badge bg="secondary mb-4 rounded-circle ">{cartCount}</Badge>
              </Nav>
            </Container>
          </Navbar>
        </div>
      </div>
    </section>
  );
}
