import { Badge, Container, Dropdown, Nav, Navbar } from "react-bootstrap";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { LanguageContext } from "../contexts/language";

export default function NavBar() {
  const cartItems = useSelector((state) => state.cart.items);
  const cartCount = cartItems.length;
  const [language, toggleLanguage] = useContext(LanguageContext);

  return (
    <section className="bg-gray-50 dark:bg-gray-950">
      <div className="border border-r-0 border-l-0 border-gray-200 dark:border-gray-600">
        <Navbar bg="dark" data-bs-theme="dark" expand="lg">
          <Container>
            <Navbar.Brand><Link className="nav-link" to={"/"}>Ecommerce App</Link></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              
              <Nav className={language === "en" ? "ms-auto" : "me-auto"} align-items-center>
                <Link className="nav-link" to="/">
                  Home
                </Link>
                <Link className="nav-link" to="/Cart">
                  Cart
                </Link>
                <Badge bg="secondary" className="rounded-circle-pill ms-2 me-2 h-25 text-start me-auto">
                  {cartCount}
                </Badge>
                <Link className="nav-link me-3" to="/register">
                  Register
                </Link>
                <Dropdown className="me-3">
                  <Dropdown.Toggle variant="outline-light" id="dropdown-basic">
                    Language
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item onClick={toggleLanguage}>English</Dropdown.Item>
                    <Dropdown.Item onClick={toggleLanguage}>Arabic</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </section>
  );
}
