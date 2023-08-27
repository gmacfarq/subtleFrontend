import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navigation.css';
import logoSlice from '../static/logoslice.webp';


/**
 * The navigation bar component.
 * uses react-bootstrap Navbar and Nav components.
 * used by App.js.
 * @module Navigation
 * @returns {JSX} The navigation bar component.
 * @exports Navigation
 */
function Navigation() {
  return (
    <Navbar expand="md" bg="dark" data-bs-theme="dark" className="bg-body-tertiary">
        <a href="/">
          <img
          z-index="2"
          src={logoSlice}
          className="d-inline-block"
          alt="Subtle Orange logo"
          />
        </a>
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav id="nav-links-custom" className="me-auto">
            <Nav.Link className="nav-link-custom" href="/music">Music</Nav.Link>
            <Nav.Link className="nav-link-custom" href="/store">Store</Nav.Link>
            <Nav.Link className="nav-link-custom" href="/press">Press</Nav.Link>
            <Nav.Link className="nav-link-custom" href="/gallery">Gallery</Nav.Link>
            <Nav.Link className="nav-link-custom" href="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;