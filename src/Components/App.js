import * as React from 'react';
import NavBar from './Common/NavBar';
import HomePage from './Pages/HomePage';
import Recipes from './Pages/Recipes';
import GroceryList from './Pages/GroceryList';
import { Routes, Route } from 'react-router-dom';

import '../App.css';

function App() {
  return (
      <div>
        <NavBar />
        <Routes>
          <Route page="Dashboard" path="/" element={<HomePage />} />
          <Route page="Recipes" path="/Recipes" element={<Recipes />} />
          <Route page="GroceryList" path="/GroceryList" element={<GroceryList />} />
        </Routes>
      </div>
  );
}

export default App;

