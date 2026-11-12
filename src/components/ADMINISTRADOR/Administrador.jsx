import { useState } from "react";
import {
  LayoutDashboard,
  Building,
  Layers,
  DoorOpen,
  ClipboardList,
  Search,
  Plus,
  Bell,
  LogOut,
  Menu,
  X,
  Trash2,
  Edit,
  Building2,
  AlertCircle,
  CheckCircle,
  ShieldAlert,
  Send
} from "lucide-react";

import "./administrador.css";

function Administrador() {
  const [menuAbierto, setMenuAbierto] = useState(false);
  const [vistaActual, setVistaActual] = useState("inicio");
  const [busqueda, setBusqueda] = useState("");
  const [mostrarFormulario, setMostrarFormulario] = useState(false);

  const [editandoId, setEditandoId] = useState(null);
  const [nuevoAmbienteNombre, setNuevoAmbienteNombre] = useState("");
  const [nuevoAmbientePiso, setNuevoAmbientePiso] = useState("Piso 1");
  const [nuevoAmbienteCapacidad, setNuevoAmbienteCapacidad] = useState("");

  const [edificioInfo] = useState({
    nombre: "Edificio Principal CIDE",
    ubicacion: "Torre A - Zona de Tecnología",
    responsable: "Administrador de Edificio"
  });

  const [pisos] = useState([
    { id: 1, nombre: "Piso 1", descripcion: "Área de sistemas y redes" },
    { id: 2, nombre: "Piso 2", descripcion: "Área de software y multimedia" },
    { id: 3, nombre: "Piso 3", descripcion: "Laboratorios avanzados de ADSO" }
  ]);

  const [ambientes, setAmbientes] = useState([
    { id: 1, nombre: "Ambiente 101", piso: "Piso 1", estado: "Disponible", capacidad: "30 personas" },
    { id: 2, nombre: "Ambiente 102", piso: "Piso 1", estado: "Ocupado", capacidad: "25 personas" },
    { id: 3, nombre: "Ambiente 103", piso: "Piso 1", estado: "Disponible", capacidad: "30 personas" },
    { id: 4, nombre: "Ambiente 201", piso: "Piso 2", estado: "Disponible", capacidad: "30 personas" },
    { id: 5, nombre: "Ambiente 202", piso: "Piso 2", estado: "Ocupado", capacidad: "20 personas" },
    { id: 6, nombre: "Ambiente 301", piso: "Piso 3", estado: "Disponible", capacidad: "35 personas" }
  ]);

  const [novedades, setNovedades] = useState([
    {
      id: 1,
      titulo: "Falla en proyector principal",
      piso: "Piso 1",
      espacio: "Ambiente 101",
      fecha: "2026-03-06",
      hora: "08:30 AM",
      trimestre: "Trimestre 1",
      instructor: "Carlos Gómez",
      estado: "Pendiente"
    },
    {
      id: 2,
      titulo: "Ventana de seguridad rota",
      piso: "Piso 2",
      espacio: "Ambiente 202",
      fecha: "2026-03-06",
      hora: "10:15 AM",
      trimestre: "Trimestre 1",
      instructor: "María Rodríguez",
      estado: "En proceso"
    }
  ]);

  const notificarCoordinacion = (id) => {
    setNovedades(
      novedades.map((nov) =>
        nov.id === id ? { ...nov, estado: "Notificado a Coordinación" } : nov
      )
    );
  };

  const resolverNovedad = (id) => {
    setNovedades(
      novedades.map((nov) =>
        nov.id === id ? { ...nov, estado: "Resuelto" } : nov
      )
    );
  };

  const abrirModalEditar = (amb) => {
    setEditandoId(amb.id);
    setNuevoAmbienteNombre(amb.nombre);
    setNuevoAmbientePiso(amb.piso);
    setNuevoAmbienteCapacidad(amb.capacidad);
    setMostrarFormulario(true);
  };

  const guardarAmbiente = (e) => {
    e.preventDefault();
    if (!nuevoAmbienteNombre.trim() || !nuevoAmbienteCapacidad.trim()) return;

    if (editandoId !== null) {
      setAmbientes(
        ambientes.map((a) =>
          a.id === editandoId
            ? { ...a, nombre: nuevoAmbienteNombre, piso: nuevoAmbientePiso, capacidad: nuevoAmbienteCapacidad }
            : a
        )
      );
      setEditandoId(null);
    } else {
      const nuevo = {
        id: Date.now(),
        nombre: nuevoAmbienteNombre,
        piso: nuevoAmbientePiso,
        estado: "Disponible",
        capacidad: nuevoAmbienteCapacidad
      };
      setAmbientes([...ambientes, nuevo]);
    }

    setNuevoAmbienteNombre("");
    setNuevoAmbienteCapacidad("");
    setMostrarFormulario(false);
  };

  const eliminarAmbiente = (id) => setAmbientes(ambientes.filter((a) => a.id !== id));
  const eliminarNovedad = (id) => setNovedades(novedades.filter((n) => n.id !== id));

  const cerrarSesion = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <div className="admin-layout">
      {/* MENÚ LATERAL */}
      <aside className={`admin-sidebar ${menuAbierto ? "abierto" : ""}`}>
        <div className="admin-logo">
          <div className="admin-logo-icon">
            <Building2 size={24} />
          </div>
          <div>
            <h2>NovedaSoft</h2>
            <span>Gestión de espacios</span>
          </div>
          <button className="cerrar-menu" onClick={() => setMenuAbierto(false)}>
            <X size={20} />
          </button>
        </div>

        <div className="admin-perfil">
          <div className="perfil-avatar">AE</div>
          <div>
            <strong>Administrador</strong>
            <span>Edificio Principal</span>
          </div>
        </div>

        <div className="menu-titulo">MENÚ PRINCIPAL</div>

        <nav className="admin-nav">
          <button
            type="button"
            className={vistaActual === "inicio" ? "nav-activo" : ""}
            onClick={() => { setVistaActual("inicio"); setMenuAbierto(false); }}
          >
            <LayoutDashboard size={18} />
            <span>Inicio</span>
          </button>

          <button
            type="button"
            className={vistaActual === "pisos" ? "nav-activo" : ""}
            onClick={() => { setVistaActual("pisos"); setMenuAbierto(false); }}
          >
            <Layers size={18} />
            <span>Pisos</span>
          </button>

          <button
            type="button"
            className={vistaActual === "ambientes" ? "nav-activo" : ""}
            onClick={() => { setVistaActual("ambientes"); setMenuAbierto(false); }}
          >
            <DoorOpen size={18} />
            <span>Ambientes</span>
          </button>

          <button
            type="button"
            className={vistaActual === "novedades" ? "nav-activo" : ""}
            onClick={() => { setVistaActual("novedades"); setMenuAbierto(false); }}
          >
            <ClipboardList size={18} />
            <span>Novedades</span>
          </button>
        </nav>

        <button type="button" className="admin-cerrar-sesion" onClick={cerrarSesion}>
          <LogOut size={18} />
          <span>Cerrar sesión</span>
        </button>
      </aside>

      {menuAbierto && <div className="admin-overlay" onClick={() => setMenuAbierto(false)} />}

      {/* CONTENIDO PRINCIPAL */}
      <main className="admin-main">
        <header className="admin-header">
          <div className="header-izquierda">
            <button className="abrir-menu" onClick={() => setMenuAbierto(true)}>
              <Menu size={22} />
            </button>
            <div>
              <span>Panel de administración / {vistaActual.charAt(0).toUpperCase() + vistaActual.slice(1)}</span>
              <h1>{vistaActual.charAt(0).toUpperCase() + vistaActual.slice(1)}</h1>
            </div>
          </div>

          <div className="header-derecha">
            <button className="notificacion">
              <Bell size={20} />
              <i />
            </button>
            <div className="header-avatar">AE</div>
          </div>
        </header>

        <div className="admin-contenido">
          {/* --- VISTA INICIO (DISEÑO LIMPIO Y MEJORADO) --- */}
          {vistaActual === "inicio" && (
            <>
              <section className="bienvenida-admin">
                <div>
                  <span>SUPERVISIÓN DE EDIFICIO</span>
                  <h2>¡Bienvenido, Administrador!</h2>
                  <p>Panel de control principal del <strong>{edificioInfo.nombre}</strong>.</p>
                </div>
                <div className="bienvenida-icono">
                  <Building size={50} strokeWidth={1.5} />
                </div>
              </section>

              {/* TARJETAS DE ESTADÍSTICAS LIMPIAS Y MODERNAS */}
              <section className="admin-estadisticas">
                <div className="estadistica-card">
                  <div className="estadistica-icono verde">
                    <Layers size={24} />
                  </div>
                  <div className="estadistica-info">
                    <span>Pisos a cargo</span>
                    <h3>{pisos.length}</h3>
                  </div>
                </div>

                <div className="estadistica-card">
                  <div className="estadistica-icono azul">
                    <DoorOpen size={24} />
                  </div>
                  <div className="estadistica-info">
                    <span>Total Ambientes</span>
                    <h3>{ambientes.length}</h3>
                  </div>
                </div>

                <div className="estadistica-card">
                  <div className="estadistica-icono naranja">
                    <CheckCircle size={24} />
                  </div>
                  <div className="estadistica-info">
                    <span>Disponibles</span>
                    <h3>{ambientes.filter((a) => a.estado === "Disponible").length}</h3>
                  </div>
                </div>

                <div className="estadistica-card">
                  <div className="estadistica-icono rojo">
                    <ShieldAlert size={24} />
                  </div>
                  <div className="estadistica-info">
                    <span>Novedades Activas</span>
                    <h3>{novedades.filter((n) => n.estado !== "Resuelto").length}</h3>
                  </div>
                </div>
              </section>

              <div className="admin-panel">
                <div className="panel-titulo">
                  <div>
                    <h3>Últimas novedades de infraestructura</h3>
                    <p>Reportes recientes ordenados por espacio</p>
                  </div>
                  <button className="ver-todo" onClick={() => setVistaActual("novedades")}>
                    Ver todo
                  </button>
                </div>

                <div className="novedades-inicio">
                  {novedades.length > 0 ? (
                    novedades.map((nov) => (
                      <div className="novedad-fila" key={nov.id}>
                        <div className="novedad-icono">
                          <AlertCircle size={18} />
                        </div>
                        <div className="novedad-info">
                          <strong>{nov.titulo}</strong>
                          <span>{nov.piso} - {nov.espacio} • Instructor: {nov.instructor}</span>
                        </div>
                        <span className={`estado ${nov.estado.toLowerCase().replace(/\s+/g, "-")}`}>
                          {nov.estado}
                        </span>
                      </div>
                    ))
                  ) : (
                    <p className="sin-datos">No hay novedades registradas en este edificio.</p>
                  )}
                </div>
              </div>
            </>
          )}

          {/* --- VISTA PISOS --- */}
          {vistaActual === "pisos" && (
            <div className="seccion-modulo">
              <div className="encabezado-modulo">
                <div>
                  <h2>Niveles del Edificio</h2>
                  <p>Listado de pisos que componen la torre principal.</p>
                </div>
              </div>

              <div className="tarjeta-tabla-novedasoft">
                <table className="tabla-novedasoft">
                  <thead>
                    <tr>
                      <th>Piso</th>
                      <th>Descripción del Nivel</th>
                      <th>Ambientes Asociados</th>
                    </tr>
                  </thead>
                  <tbody>
                    {pisos.map((piso) => (
                      <tr key={piso.id}>
                        <td><strong style={{ color: "#176c36" }}>{piso.nombre}</strong></td>
                        <td>{piso.descripcion}</td>
                        <td>
                          <span className="badge-espacio">
                            {ambientes.filter((a) => a.piso === piso.nombre).length} espacios registrados
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* --- VISTA AMBIENTES --- */}
          {vistaActual === "ambientes" && (
            <div className="seccion-modulo">
              <div className="encabezado-modulo">
                <div>
                  <h2>Gestión de Ambientes</h2>
                  <p>Control general de todos los espacios de formación organizados por nivel.</p>
                </div>
                <button 
                  className="btn-agregar" 
                  onClick={() => {
                    setEditandoId(null);
                    setNuevoAmbienteNombre("");
                    setNuevoAmbienteCapacidad("");
                    setMostrarFormulario(true);
                  }}
                >
                  <Plus size={16} /> Nuevo ambiente
                </button>
              </div>

              {mostrarFormulario && (
                <div className="modal-overlay">
                  <div className="modal-contenedor">
                    <div className="modal-header">
                      <h3>{editandoId !== null ? "Editar Ambiente" : "Registrar Nuevo Ambiente"}</h3>
                      <button className="btn-cerrar-modal" onClick={() => setMostrarFormulario(false)}>
                        <X size={18} />
                      </button>
                    </div>
                    
                    <form className="modal-body" onSubmit={guardarAmbiente}>
                      <div className="grupo-campo">
                        <label>Nombre del Ambiente</label>
                        <input
                          type="text"
                          placeholder="Ej. Ambiente 104"
                          value={nuevoAmbienteNombre}
                          onChange={(e) => setNuevoAmbienteNombre(e.target.value)}
                          required
                        />
                      </div>

                      <div className="grupo-campo">
                        <label>Piso / Ubicación</label>
                        <select
                          value={nuevoAmbientePiso}
                          onChange={(e) => setNuevoAmbientePiso(e.target.value)}
                          required
                        >
                          {pisos.map((p) => (
                            <option key={p.id} value={p.nombre}>{p.nombre}</option>
                          ))}
                        </select>
                      </div>

                      <div className="grupo-campo">
                        <label>Capacidad</label>
                        <input
                          type="text"
                          placeholder="Ej. 30 personas"
                          value={nuevoAmbienteCapacidad}
                          onChange={(e) => setNuevoAmbienteCapacidad(e.target.value)}
                          required
                        />
                      </div>

                      <div className="modal-acciones">
                        <button type="button" className="btn-cancelar" onClick={() => setMostrarFormulario(false)}>
                          Cancelar
                        </button>
                        <button type="submit" className="btn-guardar">
                          {editandoId !== null ? "Actualizar Cambios" : "Guardar Ambiente"}
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              )}

              <div className="tarjeta-tabla-novedasoft">
                <table className="tabla-novedasoft tabla-ambientes-organizada">
                  <thead>
                    <tr>
                      <th>Nivel / Piso</th>
                      <th>Ambiente</th>
                      <th>Capacidad</th>
                      <th>Estado Actual</th>
                      <th style={{ textAlign: "right" }}>Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    {ambientes
                      .slice()
                      .sort((a, b) => a.piso.localeCompare(b.piso))
                      .map((amb, index, arr) => {
                        const esPrimerAmbienteDelPiso = index === 0 || arr[index - 1].piso !== amb.piso;
                        
                        return (
                          <tr key={amb.id}>
                            <td>
                              {esPrimerAmbienteDelPiso ? (
                                <span className="badge-piso-principal">{amb.piso}</span>
                              ) : (
                                <span className="piso-sub">&nbsp;</span>
                              )}
                            </td>
                            <td>
                              <span className="badge-espacio">{amb.nombre}</span>
                            </td>
                            <td>{amb.capacidad}</td>
                            <td>
                              <span className={`estado ${amb.estado.toLowerCase()}`}>
                                {amb.estado}
                              </span>
                            </td>
                            <td>
                              <div className="acciones-fila">
                                <button 
                                  className="btn-accion-icono resolver" 
                                  title="Editar ambiente"
                                  onClick={() => abrirModalEditar(amb)}
                                >
                                  <Edit size={15} />
                                </button>
                                <button
                                  className="btn-accion-icono eliminar"
                                  title="Eliminar ambiente"
                                  onClick={() => eliminarAmbiente(amb.id)}
                                >
                                  <Trash2 size={15} />
                                </button>
                              </div>
                            </td>
                          </tr>
                        );
                      })}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* --- VISTA NOVEDADES --- */}
          {vistaActual === "novedades" && (
            <div className="seccion-modulo">
              <div className="encabezado-modulo">
                <div>
                  <h2>Control de Novedades e Infraestructura</h2>
                  <p>Reportes de los instructores ordenados por piso, ambiente e instructor.</p>
                </div>
                <div className="acciones-modulo">
                  <div className="buscador-modulo">
                    <Search size={18} />
                    <input
                      type="text"
                      placeholder="Buscar por novedad, espacio o instructor..."
                      value={busqueda}
                      onChange={(e) => setBusqueda(e.target.value)}
                    />
                  </div>
                </div>
              </div>

              <div className="tarjeta-tabla-novedasoft">
                <table className="tabla-novedasoft">
                  <thead>
                    <tr>
                      <th>Piso / Espacio</th>
                      <th>Descripción de Novedad</th>
                      <th>Fecha y Hora</th>
                      <th>Trimestre</th>
                      <th>Instructor que reporta</th>
                      <th>Estado</th>
                      <th style={{ textAlign: "right" }}>Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    {novedades
                      .slice()
                      .sort((a, b) => {
                        if (a.piso !== b.piso) {
                          return a.piso.localeCompare(b.piso);
                        }
                        if (a.espacio !== b.espacio) {
                          return a.espacio.localeCompare(b.espacio);
                        }
                        return a.instructor.localeCompare(b.instructor);
                      })
                      .filter(
                        (n) =>
                          n.titulo.toLowerCase().includes(busqueda.toLowerCase()) ||
                          n.espacio.toLowerCase().includes(busqueda.toLowerCase()) ||
                          n.instructor.toLowerCase().includes(busqueda.toLowerCase()) ||
                          n.piso.toLowerCase().includes(busqueda.toLowerCase())
                      )
                      .map((nov) => (
                        <tr key={nov.id}>
                          <td>
                            <div className="fecha-hora-contenedor">
                              <strong style={{ color: "#176c36" }}>{nov.piso}</strong>
                              <span className="badge-espacio" style={{ marginTop: "4px", display: "inline-block" }}>
                                {nov.espacio}
                              </span>
                            </div>
                          </td>
                          <td>
                            <strong className="titulo-novedad-item">{nov.titulo}</strong>
                          </td>
                          <td>
                            <div className="fecha-hora-contenedor">
                              <span>{nov.fecha}</span>
                              <small>{nov.hora}</small>
                            </div>
                          </td>
                          <td>
                            <span className="badge-trimestre">{nov.trimestre}</span>
                          </td>
                          <td>
                            <div className="instructor-info">
                              <span className="avatar-instructor">
                                {nov.instructor.split(" ").map((n) => n[0]).join("")}
                              </span>
                              <strong>{nov.instructor}</strong>
                            </div>
                          </td>
                          <td>
                            <span className={`badge-estado ${nov.estado.toLowerCase().replace(/\s+/g, "-")}`}>
                              {nov.estado}
                            </span>
                          </td>
                          <td>
                            <div className="acciones-fila">
                              <button
                                className="btn-accion-icono notificar"
                                title="Notificar a Coordinación"
                                onClick={() => notificarCoordinacion(nov.id)}
                              >
                                <Send size={15} />
                              </button>
                              <button
                                className="btn-accion-icono resolver"
                                title="Marcar como Resuelto"
                                onClick={() => resolverNovedad(nov.id)}
                              >
                                <CheckCircle size={15} />
                              </button>
                              <button
                                className="btn-accion-icono eliminar"
                                title="Eliminar novedad"
                                onClick={() => eliminarNovedad(nov.id)}
                              >
                                <Trash2 size={15} />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default Administrador;