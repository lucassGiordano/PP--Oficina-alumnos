import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import TablePage from './TablePage';
import HomePage from './HomePage';

function App() {
  const [filterYear, setFilterYear] = useState(null);

  const handleYearFilter = (year) => {
    setFilterYear(year);
  };

  const handleResetFilter = () => {
    setFilterYear(null);
  };

  return (
    <Router>
      <div className="container">
        <div className="sidebar">
          <ul>
            <li className="menu-item" onClick={handleResetFilter}><Link to="/">Inicio</Link></li>
            <li className="menu-item" onClick={() => handleYearFilter(1)}><Link to="/">1 Año</Link></li>
            <li className="menu-item" onClick={() => handleYearFilter(2)}><Link to="/">2 Año</Link></li>
            <li className="menu-item" onClick={() => handleYearFilter(3)}><Link to="/">3 Año</Link></li>
            <li className="menu-item" onClick={() => handleYearFilter(4)}><Link to="/">4 Año</Link></li>
            <li className="menu-item" onClick={() => handleYearFilter(5)}><Link to="/">5 Año</Link></li>
            <li className="menu-item" onClick={() => handleYearFilter(6)}><Link to="/">6 Año</Link></li>
            <li className="menu-item" onClick={() => handleYearFilter(7)}><Link to="/">7 Año</Link></li>
            
          </ul>
        </div>
        <div className="content">
          <header>
            <div className="user">
              <img
                src="https://via.placeholder.com/50" // Reemplaza con la URL de la imagen del perfil
                alt="User Profile"
                className="profile-pic"
              />
              Usuario
            </div>
          </header>
          <main>
            <Routes>
              <Route path="/" element={<HomePage filterYear={filterYear} />} />
              <Route path="/table/:id" element={<TablePage />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
