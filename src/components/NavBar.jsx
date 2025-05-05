import { Badge, Container, Dropdown, Nav, Navbar } from "react-bootstrap";

import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { LanguageContext } from "../contexts/language";

export default function NavBar() {
  const cartItems = useSelector((state) => state.cart.items);
  const cartCount = cartItems.length;

  const  [language , toggleLanguage]  = useContext(LanguageContext);

  useEffect(() => {}, []);

  return (
    <section className="bg-gray-50 dark:bg-gray-950">
      <div>
        <div className="border border-r-0 border-l-0 border-gray-200 dark:border-gray-600">
          <Navbar bg="dark" data-bs-theme="dark">
            <Container>
              <Navbar.Brand>Ecommmerce App</Navbar.Brand>
              <Nav className="ms-rtl-auto">
                <Link className="nav-link" to="/">
                  Home
                </Link>
                <Link className="nav-link" to="/Cart">
                  Cart
                </Link>
                <Badge bg="secondary mb-4 rounded-circle ">{cartCount}</Badge>
                <Link className="nav-link ms-3" to="/register">
                  Register
                </Link>
                <Dropdown className="ms-3">
                  <Dropdown.Toggle variant="outline-light" id="dropdown-basic" >
                    language
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item onClick={toggleLanguage}>English</Dropdown.Item>
                    <Dropdown.Item onClick={toggleLanguage}>Arabic</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Nav>
            </Container>
          </Navbar>
        </div>
      </div>
    </section>
  );
}
