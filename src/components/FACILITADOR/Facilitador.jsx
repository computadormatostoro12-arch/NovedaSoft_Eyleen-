import React, { useState } from "react";
import {
  LayoutDashboard,
  CalendarDays,
  Upload,
  FileText,
  LogOut,
  Menu,
  X,
  User,
  ChevronDown,
  Clock,
  Download,
  Trash2
} from "lucide-react";

import "./facilitador.css";

function Facilitador() {
  const [menuAbierto, setMenuAbierto] = useState(false);
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [archivo, setArchivo] = useState(null);
  const [trimestre, setTrimestre] = useState("");
  const [programa, setPrograma] = useState("");
  const [horarios, setHorarios] = useState([]);

  const registrarHorario = (e) => {
    e.preventDefault();

    if (!archivo) {
      alert("Seleccione un archivo.");
      return;
    }

    const nuevoHorario = {
      id: Date.now(),
      nombre: archivo.name,
      trimestre,
      programa,
      fecha: new Date().toLocaleDateString("es-CO"),
      archivo
    };

    setHorarios([...horarios, nuevoHorario]);
    setArchivo(null);
    setTrimestre("");
    setPrograma("");
    setMostrarFormulario(false);
  };

  const eliminarHorario = (id) => {
    setHorarios(horarios.filter(horario => horario.id !== id));
  };

  const cerrarSesion = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <div className="panel-facilitador">
      <aside className={`sidebar-f ${menuAbierto ? "sidebar-abierto-f" : ""}`}>
        <div className="logo-f">
          <div className="logo-icono-f">
            <CalendarDays size={25} />
          </div>
          <div>
            <h2>NovedaSoft</h2>
            <span>Gestión de ambientes</span>
          </div>
          <button className="cerrar-menu-f" onClick={() => setMenuAbierto(false)}>
            <X size={20} />
          </button>
        </div>

        <div className="perfil-f">
          <div className="avatar-f">
            <User size={23} />
          </div>
          <div>
            <strong>Facilitador</strong>
            <span>Usuario del sistema</span>
          </div>
          <ChevronDown size={17} />
        </div>

        <nav className="navegacion-f">
          <p className="titulo-menu-f">MENÚ PRINCIPAL</p>
          <a href="/menu">
            <LayoutDashboard size={19} />
            <span>Inicio</span>
          </a>
          <a href="/facilitador" className="activo-f">
            <CalendarDays size={19} />
            <span>Horarios</span>
          </a>
        </nav>

        <div className="parte-inferior-f">
          <div className="ayuda-f">
            <FileText size={21} />
            <strong>Gestión académica</strong>
            <p>Mantén actualizados los horarios de formación.</p>
          </div>
          <button className="cerrar-sesion-f" onClick={cerrarSesion}>
            <LogOut size={19} />
            Cerrar sesión
          </button>
        </div>
      </aside>

      {menuAbierto && (
        <div className="fondo-menu-f" onClick={() => setMenuAbierto(false)} />
      )}

      <main className="contenido-f">
        <header className="encabezado-f">
          <button className="abrir-menu-f" onClick={() => setMenuAbierto(true)}>
            <Menu size={23} />
          </button>
          <div>
            <span className="ruta-f">Inicio / Horarios</span>
            <h1>Gestión de horarios</h1>
            <p>Administra los horarios de formación de cada trimestre.</p>
          </div>
          <div className="usuario-encabezado-f">
            <div className="avatar-pequeno-f">
              <User size={19} />
            </div>
            <div>
              <strong>Facilitador</strong>
              <span>Gestión académica</span>
            </div>
          </div>
        </header>

        <section className="bienvenida-f">
          <div>
            <span className="etiqueta-f">PANEL DE FACILITADOR</span>
            <h2>¡Bienvenido, Facilitador!</h2>
            <p>Desde aquí puedes cargar y consultar los horarios correspondientes a cada trimestre de formación.</p>
          </div>
          <div className="bienvenida-icono-f">
            <CalendarDays size={65} strokeWidth={1.3} />
          </div>
        </section>

        <section className="estadisticas-f">
          <article className="tarjeta-estadistica-f">
            <div className="estadistica-icono-f verde-f">
              <FileText size={23} />
            </div>
            <div>
              <span>Horarios cargados</span>
              <h3>{horarios.length}</h3>
              <p>Archivos registrados</p>
            </div>
          </article>
          <article className="tarjeta-estadistica-f">
            <div className="estadistica-icono-f azul-f">
              <CalendarDays size={23} />
            </div>
            <div>
              <span>Trimestres registrados</span>
              <h3>{new Set(horarios.map(h => h.trimestre)).size}</h3>
              <p>Trimestres con horarios</p>
            </div>
          </article>
          <article className="tarjeta-estadistica-f">
            <div className="estadistica-icono-f naranja-f">
              <Clock size={23} />
            </div>
            <div>
              <span>Última actualización</span>
              <h3>{horarios.length ? horarios[horarios.length - 1].fecha : "—"}</h3>
              <p>Fecha del último registro</p>
            </div>
          </article>
        </section>

        <section className="seccion-horarios-f">
          <div className="titulo-seccion-f">
            <div>
              <h2>Horarios de formación</h2>
              <p>Consulta los archivos y registra nuevos horarios.</p>
            </div>
            <button className="boton-subir-f" onClick={() => setMostrarFormulario(!mostrarFormulario)}>
              <Upload size={18} />
              Subir horario
            </button>
          </div>

          {mostrarFormulario && (
            <form className="formulario-horario-f" onSubmit={registrarHorario}>
              <h3>Registrar horario de formación</h3>
              <div className="campos-formulario-f">
                <div>
                  <label>Trimestre</label>
                  <select value={trimestre} onChange={(e) => setTrimestre(e.target.value)} required>
                    <option value="">Seleccione un trimestre</option>
                    <option value="I Trimestre">I Trimestre</option>
                    <option value="II Trimestre">II Trimestre</option>
                    <option value="III Trimestre">III Trimestre</option>
                    <option value="IV Trimestre">IV Trimestre</option>
                  </select>
                </div>
                <div>
                  <label>Programa de formación</label>
                  <input
                    type="text"
                    value={programa}
                    onChange={(e) => setPrograma(e.target.value)}
                    placeholder="Nombre del programa"
                    required
                  />
                </div>
                <div className="campo-archivo-f">
                  <label>Archivo del horario</label>
                  <input
                    type="file"
                    accept=".pdf,.xlsx,.xls,.doc,.docx"
                    onChange={(e) => setArchivo(e.target.files[0])}
                    required
                  />
                  <small>Formatos permitidos: PDF, Excel y Word.</small>
                </div>
              </div>
              <div className="acciones-formulario-f">
                <button type="button" onClick={() => setMostrarFormulario(false)}>Cancelar</button>
                <button type="submit">Guardar horario</button>
              </div>
            </form>
          )}

          <div className="lista-encabezado-f">
            <h3>Horarios registrados</h3>
            <span>{horarios.length} archivos</span>
          </div>

          {horarios.length > 0 ? (
            <div className="lista-horarios-f">
              {horarios.map(horario => (
                <article className="tarjeta-horario-f" key={horario.id}>
                  <div className="archivo-icono-f">
                    <FileSpreadsheet size={24} />
                  </div>
                  <div className="informacion-horario-f">
                    <strong>{horario.nombre}</strong>
                    <span>{horario.programa}</span>
                    <small>{horario.trimestre} · Cargado el {horario.fecha}</small>
                  </div>
                  <div className="acciones-horario-f">
                    <button
                      title="Descargar"
                      onClick={() => {
                        const url = URL.createObjectURL(horario.archivo);
                        const enlace = document.createElement("a");
                        enlace.href = url;
                        enlace.download = horario.nombre;
                        enlace.click();
                        URL.revokeObjectURL(url);
                      }}
                    >
                      <Download size={18} />
                    </button>
                    <button title="Eliminar" onClick={() => eliminarHorario(horario.id)}>
                      <Trash2 size={18} />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="sin-horarios-f">
              <div className="sin-horarios-icono-f">
                <CalendarDays size={34} />
              </div>
              <h3>No hay horarios registrados</h3>
              <p>Cuando cargues un horario, aparecerá aquí para que puedas consultarlo.</p>
              <button onClick={() => setMostrarFormulario(true)}>
                <Upload size={17} />
                Cargar primer horario
              </button>
            </div>
          )}
        </section>

        <footer className="pie-f">
          <span>NovedaSoft</span>
          <span>Gestión de ambientes de formación</span>
        </footer>
      </main>
    </div>
  );
}

export default Facilitador;