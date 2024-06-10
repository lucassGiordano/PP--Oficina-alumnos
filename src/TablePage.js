import React from 'react';
import { useParams } from 'react-router-dom';
import './TablePage.css';

function TablePage() {
  const { id } = useParams();

  // Datos de ejemplo para diferentes tablas
  const tables = {
    1: [
      ["Dato 1-1", "Dato 1-2", "Dato 1-3"],
      ["Dato 1-4", "Dato 1-5", "Dato 1-6"],
    ],
    2: [
      ["Dato 2-1", "Dato 2-2", "Dato 2-3"],
      ["Dato 2-4", "Dato 2-5", "Dato 2-6"],
    ],
    // Añade más tablas según sea necesario
  };

  const tableData = tables[id] || [];

  return (
    <div className="table-container">
      <h1>Tabla de Datos {id}</h1>
      <table>
        <thead>
          <tr>
            <th>Columna 1</th>
            <th>Columna 2</th>
            <th>Columna 3</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, index) => (
            <tr key={index}>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TablePage;
