import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import './Header.css'; // Import your custom CSS

function Header({ cartCounter }) {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home" className="navbar-brand">
          <img width={75} src='https://www.kfcpakistan.com/static/media/kfc-meal.afc417f5d19998efd26b.png'/>
          KFC APP
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className="nav-link">
              Home
            </Nav.Link>
            <Nav.Link href="#link" className="nav-link">
              categories
            </Nav.Link>
            <NavDropdown title="products" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1" className="nav-dropdown-item">
                Action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2" className="nav-dropdown-item">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3" className="nav-dropdown-item">
                Something
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4" className="nav-dropdown-item">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <button class="btn btn-primary cart-button" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">View cart ({cartCounter})</button>

    </Navbar>
  );
}

export default Header;
