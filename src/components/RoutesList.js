import { Navigate, Route, Routes } from 'react-router-dom';
import Music from './Music';
import Store from './Store';
import Press from './Press';
import Gallery from './Gallery';
import Contact from './Contact.js';
import Home from './Home';

/** List of Route components for routing
 *
 * props:
 *  - no props, this is a dummy router
 *
 * App -> RoutesList -> {Hompe, Music, Store, Press, Gallery, Contact}
 */
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