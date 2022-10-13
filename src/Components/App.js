import { Route, Routes } from 'react-router-dom';
import NavBar from './Common/NavBar.js';
import HomePage from './Pages/HomePage.js';

import '../App.css';

function App() {
  return (
      <div id="body-wrapper">
        <NavBar />
        <Routes>
            <Route exact path="/" element={<HomePage/>} />
        </Routes>
      </div>
  );
}

export default App;
