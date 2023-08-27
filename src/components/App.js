import { BrowserRouter } from 'react-router-dom';
import Navigation from './Navigation';
import RoutesList from './RoutesList';
import './App.css';

function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Navigation/>
          <RoutesList/>
        </BrowserRouter>
      </div>
      <div className="footer">
        <p>© 2023 Subtle Orange</p>
      </div>
    </>
  );
}

export default App;
