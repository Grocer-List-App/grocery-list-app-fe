import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import NavBar from './Common/NavBar.js'
import UserDashboard from './Pages/UserDashboard.js';

import '../App.css';

function App() {
  return (
    <Router>
      <div id="body-wrapper">
        <NavBar />
        <UserDashboard />
      </div>
    </Router>
  );
}

export default App;
