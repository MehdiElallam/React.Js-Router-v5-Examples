import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'
import Navigation from './Components/Navigation'
import Routes from './Components/Routes'

function App() {
  return (
      <Router>
          <Navigation />
          <Routes />
      </Router>
  );
}

export default App;
