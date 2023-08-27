import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navigation.css';
import logoSlice from '../static/logoslice.png';

const logoWidth = "100";
function Navigation() {
  return (
    <Navbar expand="lg" bg="dark" data-bs-theme="dark" className="bg-body-tertiary">
      <img
        z-index="2"
        src={logoSlice}
        width={logoWidth}
        height="100"
        padding="2rem"
        className="d-inline-block align-top"
        alt="Subtle Orange logo"
      />
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