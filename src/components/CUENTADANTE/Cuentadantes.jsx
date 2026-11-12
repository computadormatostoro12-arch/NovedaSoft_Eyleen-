import { useState } from "react";
import {
  LayoutDashboard,
  Package,
  BarChart3,
  Search,
  Bell,
  ChevronDown,
  LogOut,
  Menu,
  X,
  Plus,
  Edit,
  Trash2,
  CheckCircle2,
} from "lucide-react";

import "./cuentadantes.css";

function Cuentadantes() {
  const [vistaActual, setVistaActual] = useState("inventario");
  const [busqueda, setBusqueda] = useState("");
  const [menuAbierto, setMenuAbierto] = useState(false);
  const [menuPerfilAbierto, setMenuPerfilAbierto] = useState(false);

  const cerrarSesion = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <div className="ns-layout">
      {menuAbierto && (
        <div className="ns-backdrop" onClick={() => setMenuAbierto(false)} />
      )}

      {/* MENÚ LATERAL */}
      <aside className={`ns-sidebar ${menuAbierto ? "ns-sidebar-open" : ""}`}>
        <div className="ns-sidebar-header">
          <div className="ns-logo-box">
            <span style={{ fontWeight: "bold", color: "#16813d", fontSize: "1.2rem" }}>NovedaSoft</span>
          </div>
          <button className="ns-close-sidebar-btn" onClick={() => setMenuAbierto(false)}>
            <X size={20} />
          </button>
        </div>

        <nav className="ns-nav-menu">
          <button
            type="button"
            className={`ns-nav-item ${vistaActual === "inicio" ? "active" : ""}`}
            onClick={() => setVistaActual("inicio")}
          >
            <LayoutDashboard size={20} />
            <span>Inicio</span>
          </button>

          <button
            type="button"
            className={`ns-nav-item ${vistaActual === "inventario" ? "active" : ""}`}
            onClick={() => setVistaActual("inventario")}
          >
            <Package size={20} />
            <span>Inventario</span>
          </button>

          <button
            type="button"
            className={`ns-nav-item ${vistaActual === "reportes" ? "active" : ""}`}
            onClick={() => setVistaActual("reportes")}
          >
            <BarChart3 size={20} />
            <span>Reportes</span>
          </button>
        </nav>

        <div className="ns-sidebar-footer">
          <button className="ns-logout-btn" onClick={cerrarSesion}>
            <LogOut size={18} />
            <span>Cerrar sesión</span>
          </button>
        </div>
      </aside>

      <div className="ns-main-wrapper">
        {/* CABECERA SUPERIOR */}
        <header className="ns-top-header">
          <button className="ns-hamburguer-btn" onClick={() => setMenuAbierto(true)}>
            <Menu size={22} />
          </button>

          <div className="ns-search-bar">
            <Search size={18} className="ns-search-icon" />
            <input
              type="text"
              placeholder="Buscar en el sistema..."
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
            />
          </div>

          <div className="ns-header-actions">
            <button className="ns-icon-btn"><Bell size={20} /></button>
            <div className="ns-user-profile-dropdown">
              <div className="ns-profile-pill" onClick={() => setMenuPerfilAbierto(!menuPerfilAbierto)}>
                <div className="ns-avatar">E</div>
                <span className="ns-user-name">Eyleen</span>
                <ChevronDown size={16} />
              </div>

              {menuPerfilAbierto && (
                <div className="ns-dropdown-menu">
                  <div className="ns-dropdown-header">
                    <strong>Eyleen Matos</strong>
                    <span>Cuentadante</span>
                  </div>
                  <button onClick={cerrarSesion}>Cerrar sesión</button>
                </div>
              )}
            </div>
          </div>
        </header>

        {/* CONTENIDO PRINCIPAL */}
        <main className="ns-main-content" style={{ padding: "24px", background: "#f4f6f8", minHeight: "calc(100vh - 70px)" }}>
          
          {/* VISTA INICIO */}
          {vistaActual === "inicio" && (
            <div>
              <h1 style={{ color: "#111" }}>Bienvenida al sistema, Eyleen</h1>
              <p style={{ color: "#555" }}>Haz clic en Inventario o Reportes en el menú de la izquierda para ver los registros.</p>
            </div>
          )}

          {/* VISTA INVENTARIO */}
          {vistaActual === "inventario" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "20px", width: "100%" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", background: "#ffffff", padding: "20px", borderRadius: "12px", boxShadow: "0 1px 3px rgba(0,0,0,0.1)" }}>
                <div>
                  <h2 style={{ margin: 0, color: "#111827", fontSize: "1.3rem" }}>Inventario a mi Cargo</h2>
                  <p style={{ margin: "4px 0 0", color: "#6b7280", fontSize: "0.875rem" }}>Control de equipos, número de serie y ambientes asignados.</p>
                </div>
                <button style={{ background: "#16813d", color: "#fff", border: "none", padding: "10px 16px", borderRadius: "8px", fontWeight: "600", cursor: "pointer", display: "flex", alignItems: "center", gap: "6px" }}>
                  <Plus size={18} /> Registrar Elemento
                </button>
              </div>

              <div style={{ background: "#ffffff", borderRadius: "12px", overflow: "hidden", boxShadow: "0 1px 3px rgba(0,0,0,0.1)" }}>
                <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left", fontSize: "0.875rem" }}>
                  <thead>
                    <tr style={{ background: "#f9fafb", borderBottom: "1px solid #e5e7eb", color: "#374151" }}>
                      <th style={{ padding: "14px 18px" }}>N° de Serie / Placa</th>
                      <th style={{ padding: "14px 18px" }}>Tipo de Equipo</th>
                      <th style={{ padding: "14px 18px" }}>Descripción</th>
                      <th style={{ padding: "14px 18px" }}>Ambiente Asignado</th>
                      <th style={{ padding: "14px 18px" }}>Estado</th>
                      <th style={{ padding: "14px 18px", textAlign: "center" }}>Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{ borderBottom: "1px solid #f3f4f6" }}>
                      <td style={{ padding: "14px 18px", fontWeight: "600", color: "#111" }}>SN-92840192</td>
                      <td style={{ padding: "14px 18px", color: "#333" }}>Computador de Escritorio</td>
                      <td style={{ padding: "14px 18px", color: "#666" }}>HP ProDesk Core i7</td>
                      <td style={{ padding: "14px 18px", color: "#16813d", fontWeight: "600" }}>Ambiente 204 - ADSO</td>
                      <td style={{ padding: "14px 18px" }}>
                        <span style={{ background: "#d1fae5", color: "#065f46", padding: "4px 10px", borderRadius: "12px", fontSize: "0.75rem", fontWeight: "600" }}>Disponible</span>
                      </td>
                      <td style={{ padding: "14px 18px", textAlign: "center" }}>
                        <button style={{ border: "none", background: "none", color: "#16813d", cursor: "pointer", marginRight: "10px" }}><Edit size={16} /></button>
                        <button style={{ border: "none", background: "none", color: "#dc2626", cursor: "pointer" }}><Trash2 size={16} /></button>
                      </td>
                    </tr>
                    <tr style={{ borderBottom: "1px solid #f3f4f6" }}>
                      <td style={{ padding: "14px 18px", fontWeight: "600", color: "#111" }}>SN-71029384</td>
                      <td style={{ padding: "14px 18px", color: "#333" }}>Video Beam</td>
                      <td style={{ padding: "14px 18px", color: "#666" }}>Epson PowerLite Multimedia</td>
                      <td style={{ padding: "14px 18px", color: "#16813d", fontWeight: "600" }}>Ambiente 102 - Redes</td>
                      <td style={{ padding: "14px 18px" }}>
                        <span style={{ background: "#fef3c7", color: "#92400e", padding: "4px 10px", borderRadius: "12px", fontSize: "0.75rem", fontWeight: "600" }}>En Uso</span>
                      </td>
                      <td style={{ padding: "14px 18px", textAlign: "center" }}>
                        <button style={{ border: "none", background: "none", color: "#16813d", cursor: "pointer", marginRight: "10px" }}><Edit size={16} /></button>
                        <button style={{ border: "none", background: "none", color: "#dc2626", cursor: "pointer" }}><Trash2 size={16} /></button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* VISTA REPORTES */}
          {vistaActual === "reportes" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "20px", width: "100%" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", background: "#ffffff", padding: "20px", borderRadius: "12px", boxShadow: "0 1px 3px rgba(0,0,0,0.1)" }}>
                <div>
                  <h2 style={{ margin: 0, color: "#111827", fontSize: "1.3rem" }}>Historial de Reportes Diarios</h2>
                  <p style={{ margin: "4px 0 0", color: "#6b7280", fontSize: "0.875rem" }}>Novedades registradas y enviadas al Administrador del Edificio.</p>
                </div>
                <button style={{ background: "#16813d", color: "#fff", border: "none", padding: "10px 16px", borderRadius: "8px", fontWeight: "600", cursor: "pointer", display: "flex", alignItems: "center", gap: "6px" }}>
                  <Plus size={18} /> Nuevo Reporte
                </button>
              </div>

              <div style={{ background: "#ffffff", borderRadius: "12px", overflow: "hidden", boxShadow: "0 1px 3px rgba(0,0,0,0.1)" }}>
                <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left", fontSize: "0.875rem" }}>
                  <thead>
                    <tr style={{ background: "#f9fafb", borderBottom: "1px solid #e5e7eb", color: "#374151" }}>
                      <th style={{ padding: "14px 18px" }}>ID Novedad</th>
                      <th style={{ padding: "14px 18px" }}>Descripción del Suceso</th>
                      <th style={{ padding: "14px 18px" }}>Ambiente</th>
                      <th style={{ padding: "14px 18px" }}>Fecha y Hora</th>
                      <th style={{ padding: "14px 18px" }}>Estado de Notificación</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{ borderBottom: "1px solid #f3f4f6" }}>
                      <td style={{ padding: "14px 18px", fontWeight: "600", color: "#111" }}>REP-089</td>
                      <td style={{ padding: "14px 18px", color: "#333" }}>Falla en el puerto de red del equipo principal</td>
                      <td style={{ padding: "14px 18px", color: "#666" }}>Ambiente 204 - ADSO</td>
                      <td style={{ padding: "14px 18px", color: "#666" }}>11 de Nov, 2026 - 10:15 a.m.</td>
                      <td style={{ padding: "14px 18px" }}>
                        <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", background: "#d1fae5", color: "#065f46", padding: "4px 10px", borderRadius: "12px", fontSize: "0.75rem", fontWeight: "600" }}>
                          <CheckCircle2 size={14} /> Notificado al Administrador
                        </span>
                      </td>
                    </tr>
                    <tr style={{ borderBottom: "1px solid #f3f4f6" }}>
                      <td style={{ padding: "14px 18px", fontWeight: "600", color: "#111" }}>REP-090</td>
                      <td style={{ padding: "14px 18px", color: "#333" }}>Daño físico en la pantalla de proyección</td>
                      <td style={{ padding: "14px 18px", color: "#666" }}>Ambiente 102 - Redes</td>
                      <td style={{ padding: "14px 18px", color: "#666" }}>11 de Nov, 2026 - 02:30 p.m.</td>
                      <td style={{ padding: "14px 18px" }}>
                        <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", background: "#d1fae5", color: "#065f46", padding: "4px 10px", borderRadius: "12px", fontSize: "0.75rem", fontWeight: "600" }}>
                          <CheckCircle2 size={14} /> Notificado al Administrador
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

        </main>
      </div>
    </div>
  );
}

export default Cuentadantes;