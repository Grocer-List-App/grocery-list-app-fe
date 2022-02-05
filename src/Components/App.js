import { Route, Routes } from 'react-router-dom';
import NavBar from './Common/NavBar.js'
import HomePage from './Pages/HomePage.js';
import Login from './Pages/Login.js';
import Signup from './Pages/Signup.js';
import UserDashboard from './Pages/UserDashboard/UserDashboard.js';

import '../App.css';

function App() {
  return (
      <div id="body-wrapper">
        <NavBar />
        <Routes>
            <Route exact path="/" element={<UserDashboard/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/signup" element={<Signup/>} />
        </Routes>
      </div>
  );
}

export default App;
