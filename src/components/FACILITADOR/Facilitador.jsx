import React, { useState } from 'react';
import './facilitador.css';
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';
function Facilitador() {
  const [trimestreActivo, setTrimestreActivo] = useState('Trimestre I - 2026');
  
  const [horarios, setHorarios] = useState([
    { id: 1, ambiente: 'Lab Software 1', programa: 'ADSO - Ficha 2875321', instructor: 'Carlos Pérez', archivo: 'Horario_T1_ADSO.xlsx', estado: 'Vigente' },
    { id: 2, ambiente: 'Lab Redes', programa: 'Redes - Ficha 2901122', instructor: 'Laura Gómez', archivo: 'Horario_T1_Redes.xlsx', estado: 'Programado' },
  ]);

  const [historial] = useState([
    { id: 101, trimestre: 'Trimestre IV - 2025', archivo: 'Respaldo_T4_2025.xlsx' },
    { id: 102, trimestre: 'Trimestre III - 2025', archivo: 'Respaldo_T3_2025.xlsx' },
  ]);

  const cambiarEstado = (id) => {
    setHorarios(horarios.map(item => {
      if (item.id === id) {
        return { ...item, estado: item.estado === 'Vigente' ? 'Programado' : 'Vigente' };
      }
      return item;
    }));
  };

  return (
    <div className="facilitador-simple-container">
      {/* Encabezado limpio */}
      <header className="facilitador-simple-header">
        <div>
          <h2>Panel de Facilitador</h2>
          <p>Gestión directa de horarios para los ambientes de formación</p>
        </div>
        
        {/* Selector rápido de trimestre */}
        <select 
          className="select-trimestre"
          value={trimestreActivo} 
          onChange={(e) => setTrimestreActivo(e.target.value)}
        >
          <option value="Trimestre I - 2026">Trimestre I - 2026 (Actual)</option>
          <option value="Trimestre II - 2026">Trimestre II - 2026</option>
          <option value="Trimestre III - 2026">Trimestre III - 2026</option>
        </select>
      </header>

      {/* Disposición minimalista en 2 columnas */}
      <div className="facilitador-simple-layout">
        
        {/* LADO IZQUIERDO: Acción principal + Historial corto */}
        <aside className="facilitador-simple-aside">
          
          {/* Zona de Subida Limpia */}
          <div className="card-simple upload-box">
            <h3>Subir / Actualizar Horario</h3>
            <p>Selecciona el archivo Excel del trimestre seleccionado</p>
            
            <label className="dropzone-clean">
              <span>📄 Elegir archivo </span>
              <input type="file" accept=".xlsx, .csv" hidden onChange={() => alert('Archivo seleccionado correctamente.')} />
            </label>
            
            <button className="btn-sena-clean" onClick={() => alert('Horario actualizado.')}>
              Guardar Cambios
            </button>
          </div>

          {/* Historial Mínimo */}
          <div className="card-simple history-box">
            <h3>Historial de Respaldos</h3>
            <ul className="history-clean-list">
              {historial.map(item => (
                <li key={item.id}>
                  <div>
                    <strong>{item.trimestre}</strong>
                    <small>{item.archivo}</small>
                  </div>
                  <button onClick={() => alert(`Descargando ${item.archivo}`)}></button>
                </li>
              ))}
            </ul>
          </div>

        </aside>

        {/* LADO DERECHO: Tarjetas de horarios activas */}
        <main className="facilitador-simple-main">
          <h3>Horarios Registrados en {trimestreActivo}</h3>
          
          <div className="grid-clean-cards">
            {horarios.map(item => (
              <div key={item.id} className="item-card">
                <div className="item-card-header">
                  <h4>{item.ambiente}</h4>
                  <span className={item.estado === 'Vigente' ? 'badge-verde' : 'badge-azul'}>
                    {item.estado}
                  </span>
                </div>

                <div className="item-card-body">
                  <p><strong>Programa:</strong> {item.programa}</p>
                  <p><strong>Instructor:</strong> {item.instructor}</p>
                  <p><strong>Archivo:</strong> <span className="file-name">{item.archivo}</span></p>
                </div>

                <div className="item-card-footer">
                  <button className="btn-outline" onClick={() => alert(`Descargando: ${item.archivo}`)}>
                    <DownloadForOfflineIcon color="primary"></DownloadForOfflineIcon>
                  </button>
                  <button className="btn-solid" onClick={() => cambiarEstado(item.id)}>
                    🔄 
                  </button>
                </div>
              </div>
            ))}
          </div>
        </main>

      </div>
    </div>
  );
}

export default Facilitador;








