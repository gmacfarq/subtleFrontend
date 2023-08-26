import { BrowserRouter } from 'react-router-dom';
import Nav from './Nav';
import RoutesList from './RoutesList';
import '../stylesheets/App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav/>
        <RoutesList/>
      </BrowserRouter>
    </div>
  );
}

export default App;