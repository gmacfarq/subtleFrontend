import { BrowserRouter } from 'react-router-dom';
import Navigation from './Navigation';
import RoutesList from './RoutesList';
import './App.css';
/**
 * The main component of the app.
 * @module App
 * @returns {JSX} The main component of the app.
 * @exports App
 */
function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>

          <Navigation/>
          <div className="main">
            <RoutesList/>
          </div>
        </BrowserRouter>
      </div>
      <div className="footer">
        <p>© 2023 Subtle Orange</p>
      </div>
    </>
  );
}

export default App;
