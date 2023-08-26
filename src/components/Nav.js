import { NavLink } from 'react-router-dom';
import "../stylesheets/Nav.css";
/** Navigation bar present throughout the site
 *
 * App -> Nav
 */
function Nav() {

  return (
    <nav className="navbar navbar-light">
      <div>
        <NavLink className="nav-link" to="/">Subtle Orange</NavLink>
      </div>

      <div>
        <NavLink className="btn btn-secondary nav-link" to="/music">
          Music
        </NavLink>
        <NavLink className="btn btn-secondary nav-link" to="/store">
          Store
        </NavLink>
        <NavLink className="btn btn-secondary nav-link" to="/press">
          Press
        </NavLink>
        <NavLink className="btn btn-secondary nav-link" to="/gallery">
          Gallery
        </NavLink>
        <NavLink className="btn btn-secondary nav-link" to="/contact">
          Contact
        </NavLink>
      </div>
    </nav>
  );
}

export default Nav;