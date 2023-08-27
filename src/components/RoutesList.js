import { Navigate, Route, Routes } from 'react-router-dom';
import Music from './Music';
import Store from './Store';
import Press from './Press';
import Gallery from './Gallery';
import Contact from './Contact.js';
import Home from './Home';

/**
 * The routes list component.
 * Used in App.js.
 * @module RoutesList
 * @returns {JSX} The routes list component.
 * @exports RoutesList
 **/
function RoutesList() {
  return (

    <Routes>
      <Route path="/music" element={<Music />} />
      <Route path="/store" element={<Store />} />
      <Route path="/press" element={<Press />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/" element={<Home />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>

  );
}

export default RoutesList;