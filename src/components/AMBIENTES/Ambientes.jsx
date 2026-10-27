import React, { useState } from 'react';
import "./ambientes.css";

function Ambientes() {
  const [listaAmbientes] = useState([
    { id: 1, nombre: 'Laboratorio de Software', capacidad: 30, estado: 'Disponible' },
    { id: 2, nombre: 'Laboratorio de Redes', capacidad: 25, estado: 'Ocupado' },
    { id: 3, nombre: 'Ambiente Multimedia', capacidad: 20, estado: 'Disponible' },
    { id: 4, nombre: 'Ambiente Multimedia', capacidad: 20, estado: 'Disponible' },
  ]);

  return (
    <div className="ambientes-container">
      <h2>Gestión de Ambientes - CIDE SENA</h2>
      <p>Visualiza el estado actual de los espacios de formación.</p>

      <div className="cards-grid">
        {listaAmbientes.map((amb) => (
          <div key={amb.id} className="ambiente-card">
            <h3>{amb.nombre}</h3>
            <p><strong>Capacidad:</strong> {amb.capacidad} personas</p>
            <p>
              <strong>Estado:</strong>{' '}
              <span className={amb.estado === 'Disponible' ? 'status-disp' : 'status-ocup'}>
                {amb.estado}
              </span>
            </p>
            <button onClick={() => alert(`Consultando ${amb.nombre}`)}>
              Ver Detalles
            </button>
          </div>
        ))}
      </div>
    </div>      
  );
}

export default Ambientes;