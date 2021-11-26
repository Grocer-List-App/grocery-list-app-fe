import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';
import NavBar from './Common/NavBar.js'

import '../App.css';

function App() {
  return (
    <Router>
      <div id="body-wrapper">
        <NavBar />
      </div>
    </Router>
  );
}

export default App;
