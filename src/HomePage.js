import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

// Datos de ejemplo
const data = [
    { id: 1, year: 1, div: '1' },
    { id: 2, year: 1, div: '2' },
    { id: 3, year: 1, div: '3' },
    { id: 4, year: 1, div: '4' },
    { id: 5, year: 1, div: '5' },
    { id: 6, year: 1, div: '6' },
    { id: 7, year: 1, div: '7' },
    { id: 1, year: 2, div: '1' },
    { id: 2, year: 2, div: '2' },
    { id: 3, year: 2, div: '3' },
    { id: 4, year: 2, div: '4' },
    { id: 5, year: 2, div: '5' },
    { id: 6, year: 2, div: '6' },
    { id: 7, year: 2, div: '7' },
  ];

function HomePage({ filterYear }) {
  const filteredData = filterYear ? data.filter(item => item.year === filterYear) : data;

  return (
    <>
      <h1>Bienvenido a mi página de inicio</h1>
      <p>Seleccione la división que quiere ver</p>
      <ul className="horizontal-list">
        {filteredData.map(item => (
          <li key={item.id} className="div-item">
            <Link to={`/table/${item.id}`}>{item.year} Año {item.div}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default HomePage;
