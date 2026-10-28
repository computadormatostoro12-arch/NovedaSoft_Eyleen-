import React, { useState, useEffect } from 'react';
import './ambientes.css';

function Ambientes() {
  const [categoriaActiva, setCategoriaActiva] = useState('Todos');
  const [orden, setOrden] = useState('Nombre (A - Z)');
  const [ambienteSeleccionado, setAmbienteSeleccionado] = useState(null);
  const [mostrarTodasNovedades, setMostrarTodasNovedades] = useState(false);
  const [fechaHoraActual, setFechaHoraActual] = useState(new Date());

  // Reloj en tiempo real
  useEffect(() => {
    const timer = setInterval(() => {
      setFechaHoraActual(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const [ambientes, setAmbientes] = useState([
    {
      id: 1,
      placa: 'L001',
      nombre: 'Laboratorio de Software 1',
      centro: 'CIDE SENA',
      sede: 'Soacha',
      piso: 'Piso 1',
      modulo: 'Módulo A',
      categoria: 'Laboratorios',
      estadoManual: 'Disponible',
      equipos: 3,
      mobiliario: 8,
      maquinas: 2,
      instructor: 'Carlos Pérez - ADSO',
      ficha: '2875321',
      horarioTexto: '07:00 AM - 01:00 PM',
      dias: 'Lunes a Viernes',
      imagen: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=400&q=80',
      listaEquipos: [
        { placaEquipo: 'EQ-501', tipo: 'Computador Escritorio', marca: 'HP ProDesk', estado: 'Operativo' },
        { placaEquipo: 'EQ-502', tipo: 'Computador Escritorio', marca: 'HP ProDesk', estado: 'En revisión' },
        { placaEquipo: 'EQ-503', tipo: 'Portátil de Préstamo', marca: 'Lenovo ThinkPad', estado: 'Operativo' }
      ]
    },
    {
      id: 2,
      placa: 'L002',
      nombre: 'Laboratorio de Redes',
      centro: 'CIDE SENA',
      sede: 'Soacha',
      piso: 'Piso 1',
      modulo: 'Módulo A',
      categoria: 'Laboratorios',
      estadoManual: 'Ocupado',
      equipos: 2,
      mobiliario: 6,
      maquinas: 1,
      instructor: 'Laura Gómez - Redes',
      ficha: '2901122',
      horarioTexto: '01:30 PM - 06:00 PM',
      dias: 'Lunes a Sábado',
      imagen: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=400&q=80',
      listaEquipos: [
        { placaEquipo: 'EQ-601', tipo: 'Computador Escritorio', marca: 'Dell OptiPlex', estado: 'Operativo' },
        { placaEquipo: 'EQ-602', tipo: 'Servidor de Pruebas', marca: 'HP Enterprise', estado: 'Operativo' }
      ]
    },
    {
      id: 3,
      placa: 'A201',
      nombre: 'Ambiente Multimedia',
      centro: 'CIDE SENA',
      sede: 'Soacha',
      piso: 'Piso 2',
      modulo: 'Módulo B',
      categoria: 'Ambientes especializados',
      estadoManual: 'Disponible',
      equipos: 2,
      mobiliario: 6,
      maquinas: 3,
      instructor: 'Javier Ramírez - Producción',
      ficha: '2754110',
      horarioTexto: '06:00 PM - 10:00 PM',
      dias: 'Lunes a Viernes',
      imagen: 'https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?auto=format&fit=crop&w=400&q=80',
      listaEquipos: [
        { placaEquipo: 'EQ-701', tipo: 'iMac de Diseño', marca: 'Apple', estado: 'Operativo' },
        { placaEquipo: 'EQ-702', tipo: 'Computador Edición', marca: 'ASUS ProArt', estado: 'Operativo' }
      ]
    },
    {
      id: 4,
      placa: 'A202',
      nombre: 'Taller de Mecatrónica',
      centro: 'CIDE SENA',
      sede: 'Soacha',
      piso: 'Piso 2',
      modulo: 'Módulo B',
      categoria: 'Talleres',
      estadoManual: 'En mantenimiento',
      equipos: 2,
      mobiliario: 6,
      maquinas: 4,
      instructor: 'Diana Martínez - Mantenimiento',
      ficha: '2619002',
      horarioTexto: '07:00 AM - 01:00 PM',
      dias: 'Lunes a Sábado',
      imagen: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=400&q=80',
      listaEquipos: [
        { placaEquipo: 'EQ-801', tipo: 'Estación PLC', marca: 'Siemens', estado: 'En mantenimiento' },
        { placaEquipo: 'EQ-802', tipo: 'Computador Control', marca: 'Dell', estado: 'Operativo' }
      ]
    },
    {
      id: 5,
      placa: 'L003',
      nombre: 'Laboratorio de Química',
      centro: 'CIDE SENA',
      sede: 'Soacha',
      piso: 'Piso 1',
      modulo: 'Módulo C',
      categoria: 'Laboratorios',
      estadoManual: 'Disponible',
      equipos: 1,
      mobiliario: 5,
      maquinas: 2,
      instructor: 'Andrés Silva - Procesos',
      ficha: '2833910',
      horarioTexto: '02:00 PM - 06:00 PM',
      dias: 'Lunes a Viernes',
      imagen: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=400&q=80',
      listaEquipos: [
        { placaEquipo: 'EQ-901', tipo: 'Espectrofotómetro PC', marca: 'HP', estado: 'Operativo' }
      ]
    },
    {
      id: 6,
      placa: 'A301',
      nombre: 'Aula de Informática 3',
      centro: 'CIDE SENA',
      sede: 'Soacha',
      piso: 'Piso 2',
      modulo: 'Módulo C',
      categoria: 'Aulas',
      estadoManual: 'Reservado',
      equipos: 2,
      mobiliario: 12,
      maquinas: 0,
      instructor: 'Sonia Ruiz - Sistemas',
      ficha: '2980123',
      horarioTexto: '07:00 AM - 12:00 PM',
      dias: 'Lunes a Viernes',
      imagen: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=400&q=80',
      listaEquipos: [
        { placaEquipo: 'EQ-101', tipo: 'Computador Docente', marca: 'Lenovo', estado: 'Operativo' },
        { placaEquipo: 'EQ-102', tipo: 'Computador Estudiante', marca: 'Lenovo', estado: 'Operativo' }
      ]
    }
  ]);

  const [novedades, setNovedades] = useState([
    { id: 1, tipo: 'error', titulo: 'Falla en equipo de cómputo', descripcion: 'Ambiente: L001 - Laboratorio de Software 1 (Placa EQ-502)', tiempo: 'Hace 2 horas' },
    { id: 2, tipo: 'mantenimiento', titulo: 'Mantenimiento preventivo', descripcion: 'Ambiente: A202 - Taller de Mecatrónica (Placa EQ-801)', tiempo: 'Hace 5 horas' },
    { id: 3, tipo: 'exito', titulo: 'Recurso agregado', descripcion: 'Ambiente: A301 - Aula de Informática 3', tiempo: 'Hace 1 día' },
    { id: 4, tipo: 'info', titulo: 'Cambio de horario', descripcion: 'Ambiente: L003 - Laboratorio de Química', tiempo: 'Hace 2 días' },
    { id: 5, tipo: 'error', titulo: 'Reporte de proyector dañado', descripcion: 'Ambiente: L002 - Laboratorio de Redes', tiempo: 'Hace 3 días' },
    { id: 6, tipo: 'mantenimiento', titulo: 'Revisión de redes eléctricas', descripcion: 'Ambiente: A201 - Ambiente Multimedia', tiempo: 'Hace 4 días' }
  ]);

  // Alternar estado de forma interactiva y sincronizar modal
  const cambiarEstadoManual = (id) => {
    setAmbientes(prevAmbientes =>
      prevAmbientes.map(amb => {
        if (amb.id === id) {
          let nuevoEstado = 'Disponible';
          if (amb.estadoManual === 'Disponible') nuevoEstado = 'Ocupado';
          else if (amb.estadoManual === 'Ocupado') nuevoEstado = 'En mantenimiento';
          else if (amb.estadoManual === 'En mantenimiento') nuevoEstado = 'Reservado';
          else nuevoEstado = 'Disponible';

          const ambienteActualizado = { ...amb, estadoManual: nuevoEstado };
          
          if (ambienteSeleccionado && ambienteSeleccionado.id === id) {
            setAmbienteSeleccionado(ambienteActualizado);
          }

          return ambienteActualizado;
        }
        return amb;
      })
    );
  };

  // Filtrado y Ordenamiento Dinámico
  const ambientesFiltrados = ambientes
    .filter(amb => {
      if (categoriaActiva === 'Todos') return true;
      return amb.categoria === categoriaActiva;
    })
    .sort((a, b) => {
      if (orden === 'Nombre (A - Z)') {
        return a.nombre.localeCompare(b.nombre);
      }
      if (orden === 'Placa') {
        return a.placa.localeCompare(b.placa);
      }
      if (orden === 'Estado') {
        return a.estadoManual.localeCompare(b.estadoManual);
      }
      return 0;
    });

  return (
    <div className="ambientes-dashboard">
      
      {/* SECCIÓN SUPERIOR: Banner Institucional */}
      <div className="top-banner-row">
        <div className="welcome-banner">
          <div className="banner-sena-badge">
            <span className="sena-logo-text">SENA</span>
            <span className="sena-sub-text">CIDE SENA<br/>SOACHA</span>
          </div>
          <div className="banner-text">
            <h2>Gestión de Ambientes</h2>
            <p>Consulta y administra los ambientes de formación del CIDE SENA. Control de placas y novedades en tiempo real.</p>
            <span className="slogan">¡Juntos construimos formación! ♥</span>
          </div>
        </div>

        <div className="stats-cards-grid">
          <div className="stat-card">
            <span className="stat-icon-img">🏢</span>
            <div className="stat-info">
              <h3>{ambientes.length}</h3>
              <p>Ambientes totales</p>
            </div>
          </div>
          <div className="stat-card">
            <span className="stat-icon-img">💻</span>
            <div className="stat-info">
              <h3>12</h3>
              <p>Equipos</p>
            </div>
          </div>
          <div className="stat-card">
            <span className="stat-icon-img">🪑</span>
            <div className="stat-info">
              <h3>43</h3>
              <p>Mobiliario</p>
            </div>
          </div>
          <div className="stat-card">
            <span className="stat-icon-img">⚙️</span>
            <div className="stat-info">
              <h3>12</h3>
              <p>Máquinas</p>
            </div>
          </div>
        </div>
      </div>

      {/* BARRA DE FILTROS Y ORDENAMIENTO */}
      <div className="filter-tabs-bar">
        <div className="tabs-buttons">
          {['Todos', 'Laboratorios', 'Talleres', 'Aulas', 'Ambientes especializados'].map((cat) => (
            <button
              key={cat}
              className={`tab-btn ${categoriaActiva === cat ? 'active' : ''}`}
              onClick={() => setCategoriaActiva(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="sort-box">
          <label>Ordenar por:</label>
          <select value={orden} onChange={(e) => setOrden(e.target.value)}>
            <option value="Nombre (A - Z)">Nombre (A - Z)</option>
            <option value="Placa">Placa / Código</option>
            <option value="Estado">Estado</option>
          </select>
        </div>
      </div>

      {/* GRILLA DE AMBIENTES + PANEL DE NOVEDADES */}
      <div className="main-ambientes-grid">
        
        <div className="cards-wrapper">
          {ambientesFiltrados.map((amb) => (
            <div key={amb.id} className="card-ambiente-figma">
              
              <div className="card-image-box">
                <img src={amb.imagen} alt={amb.nombre} />
                <span className={`badge-status ${amb.estadoManual.toLowerCase().replace(/\s+/g, '-')}`}>
                  {amb.estadoManual}
                </span>
              </div>

              <div className="card-content">
                <div className="card-title-row">
                  <h3>{amb.nombre}</h3>
                  <span className="highlight-placa">{amb.placa}</span>
                </div>

                <div className="card-info-location">
                  <p><strong>Centro:</strong> {amb.centro}</p>
                  <p><strong>Sede:</strong> {amb.sede} &nbsp;|&nbsp; <strong>Piso:</strong> {amb.piso}</p>
                  <p><strong>Módulo:</strong> {amb.modulo}</p>
                  <p><strong>Encargado:</strong> {amb.instructor}</p>
                  <p><strong>Horario:</strong> {amb.horarioTexto}</p>
                </div>

                <div className="card-resources-count">
                  <span>💻 Equipos: <strong>{amb.equipos}</strong></span>
                  <span>🪑 Mobiliario: <strong>{amb.mobiliario}</strong></span>
                  <span>⚙️ Máquinas: <strong>{amb.maquinas}</strong></span>
                </div>

                <div className="card-action-btns">
                  <button className="btn-ver-detalles" onClick={() => setAmbienteSeleccionado(amb)}>
                    Ver detalles
                  </button>
                  <button className="btn-gestionar-novedades" onClick={() => cambiarEstadoManual(amb.id)}>
                    Cambiar Estado
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* PANEL LATERAL DE NOVEDADES */}
        <aside className="sidebar-novedades">
          <div className="novedades-header">
            <h3>Novedades recientes</h3>
            <button className="link-ver-todas" onClick={() => setMostrarTodasNovedades(true)}>Ver todas</button>
          </div>

          <div className="novedades-list">
            {novedades.slice(0, 3).map((item) => (
              <div key={item.id} className="novedad-item">
                <div className={`novedad-icon ${item.tipo}`}>
                  {item.tipo === 'error' && '⚠️'}
                  {item.tipo === 'mantenimiento' && '🔧'}
                  {item.tipo === 'exito' && '➕'}
                  {item.tipo === 'info' && '📅'}
                </div>
                <div className="novedad-info">
                  <h4>{item.titulo}</h4>
                  <p>{item.descripcion}</p>
                  <small>{item.tiempo}</small>
                </div>
              </div>
            ))}
          </div>
        </aside>

      </div>

      {/* MODAL DE DETALLES CON TODAS LAS PLACAS DE EQUIPOS */}
      {ambienteSeleccionado && (
        <div className="modal-overlay" onClick={() => setAmbienteSeleccionado(null)}>
          <div className="modal-detail-card" onClick={(e) => e.stopPropagation()}>
            
            <div className="modal-header">
              <div>
                <h2>{ambienteSeleccionado.nombre}</h2>
                <span className="modal-placa">Placa ambiente: {ambienteSeleccionado.placa}</span>
              </div>
              <button className="btn-close-modal" onClick={() => setAmbienteSeleccionado(null)}>✕</button>
            </div>

            <div className="modal-body">
              <div className="modal-image-container">
                <img src={ambienteSeleccionado.imagen} alt={ambienteSeleccionado.nombre} />
                <div className="modal-live-status">
                  <span>Estado actual:</span>
                  <strong className={`badge-status ${ambienteSeleccionado.estadoManual.toLowerCase().replace(/\s+/g, '-')}`}>
                    {ambienteSeleccionado.estadoManual}
                  </strong>
                </div>
              </div>

              <div className="modal-details-grid">
                <div className="detail-box">
                  <h4>🏢 Ubicación CIDE SENA</h4>
                  <p><strong>Sede:</strong> {ambienteSeleccionado.sede}</p>
                  <p><strong>Módulo:</strong> {ambienteSeleccionado.modulo}</p>
                  <p><strong>Piso:</strong> {ambienteSeleccionado.piso}</p>
                </div>

                <div className="detail-box">
                  <h4>👨‍🏫 Asignación</h4>
                  <p><strong>Instructor:</strong> {ambienteSeleccionado.instructor}</p>
                  <p><strong>Ficha:</strong> {ambienteSeleccionado.ficha}</p>
                  <p><strong>Horario:</strong> {ambienteSeleccionado.horarioTexto}</p>
                </div>

                {/* LISTADO DE TODAS LAS PLACAS DE EQUIPOS */}
                <div className="detail-box full-width">
                  <h4>💻 Listado y Placas de Equipos Asignados</h4>
                  <div style={{ marginTop: '8px', maxHeight: '140px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '6px', paddingRight: '4px' }}>
                    {ambienteSeleccionado.listaEquipos && ambienteSeleccionado.listaEquipos.map((eq, index) => (
                      <div key={index} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#fff', padding: '6px 10px', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '0.78rem' }}>
                        <span><strong>{eq.placaEquipo}</strong> - {eq.tipo} ({eq.marca})</span>
                        <span style={{ color: eq.estado === 'Operativo' ? '#10b981' : '#f59e0b', fontWeight: 'bold' }}>{eq.estado}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="modal-footer">
              <button className="btn-modal-action" onClick={() => cambiarEstadoManual(ambienteSeleccionado.id)}>
                🔄 Cambiar Estado Aquí
              </button>
              <button className="btn-modal-close" onClick={() => setAmbienteSeleccionado(null)}>Cerrar</button>
            </div>

          </div>
        </div>
      )}

      {/* MODAL DE "VER TODAS LAS NOVEDADES" (REPORTES) */}
      {mostrarTodasNovedades && (
        <div className="modal-overlay" onClick={() => setMostrarTodasNovedades(false)}>
          <div className="modal-detail-card" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '600px' }}>
            
            <div className="modal-header" style={{ background: '#00324d' }}>
              <div>
                <h2>📋 Reporte Completo de Novedades</h2>
                <span className="modal-placa">Historial de incidencias y registros CIDE SENA</span>
              </div>
              <button className="btn-close-modal" onClick={() => setMostrarTodasNovedades(false)}>✕</button>
            </div>

            <div className="modal-body" style={{ maxHeight: '60vh', overflowY: 'auto' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {novedades.map((item) => (
                  <div key={item.id} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', background: '#f8fafc', padding: '12px', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                    <div className={`novedad-icon ${item.tipo}`} style={{ width: '32px', height: '32px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.9rem', flexShrink: '0' }}>
                      {item.tipo === 'error' && '⚠️'}
                      {item.tipo === 'mantenimiento' && '🔧'}
                      {item.tipo === 'exito' && '➕'}
                      {item.tipo === 'info' && '📅'}
                    </div>
                    <div style={{ flex: 1 }}>
                      <h4 style={{ margin: '0 0 2px 0', fontSize: '0.9rem', color: '#0f172a' }}>{item.titulo}</h4>
                      <p style={{ margin: '0 0 4px 0', fontSize: '0.8rem', color: '#475569' }}>{item.descripcion}</p>
                      <small style={{ color: '#94a3b8', fontSize: '0.72rem' }}>Registrado: {item.tiempo}</small>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="modal-footer">
              <button className="btn-modal-close" onClick={() => setMostrarTodasNovedades(false)}>Cerrar Reporte</button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}

export default Ambientes;