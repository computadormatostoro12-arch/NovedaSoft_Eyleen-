import React, { useState } from 'react';
import './cuentadantes.css';

function Cuentadante() {
  const [bienesList, setBienesList] = useState([
    { id: 1, placa: 'SENA-001245', descripcion: 'Computador Portátil Core i5', serial: 'SN-99882', estado: 'Asignado' },
    { id: 2, placa: 'SENA-001890', descripcion: 'VideoBeam Epson', serial: 'SN-11234', estado: 'En Revisión' },
    { id: 3, placa: 'SENA-002114', descripcion: 'Teclado y Mouse Inalámbrico', serial: 'SN-55431', estado: 'Asignado' },
  ]);

  const reportarBañado = (id) => {
    alert(`Generando reporte de novedad/daño para el activo con ID: ${id}`);
  };

  return (
    <div className="cuentadante-container">
      <h2>Panel de Cuentadante - Control de Activos</h2>
      <p>Revisa el inventario de equipos a tu cargo y reporta novedades técnicas.</p>

      <div className="cuentadante-grid">
        {bienesList.map((bien) => (
          <div key={bien.id} className="cuentadante-card">
            <h3>{bien.descripcion}</h3>
            <p><strong>Placa:</strong> {bien.placa}</p>
            <p><strong>Serial:</strong> {bien.serial}</p>
            <p>
              <strong>Estado:</strong>{' '}
              <span className={bien.estado === 'Asignado' ? 'status-asignado' : 'status-revision'}>
                {bien.estado}
              </span>
            </p>
            <button onClick={() => reportarBañado(bien.id)}>
              Reportar Novedad de Activo
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cuentadante;