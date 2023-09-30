import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState, useEffect, useContext } from 'react';
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

  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // find current scroll position
      const currentScrollPos = window.scrollY;

      // set state based on location info (explained in more detail below)
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10 );
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos, isExpanded]);

  const navbarStyles = {
    position: 'fixed',
    width: '100%',
    transition: 'top 0.6s'
  };

  const handleNavbarToggle = () => {
    setIsExpanded(!isExpanded);
  };


  return (
    <Navbar
      style={{ ...navbarStyles, top: visible ? '0' : isExpanded ? '-27rem' : '-10rem' }}
      expand="md"
      bg="dark"
      data-bs-theme="dark"
      className="bg-body-tertiary">
      <a href="/">
        <img
          src={logoSlice}
          className="d-inline-block"
          alt="Subtle Orange logo"
        />
      </a>
      <Container>
        <Navbar.Toggle onClick={handleNavbarToggle} aria-controls="basic-navbar-nav" />
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