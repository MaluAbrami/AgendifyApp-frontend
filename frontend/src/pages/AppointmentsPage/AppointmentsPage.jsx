import "./AppointmentsPage.css";

const mockAppointments = [
  { id: 1, service: "Corte de cabelo", status: "Em andamento", date: "2025-10-01" },
  { id: 2, service: "Manicure", status: "Concluído", date: "2025-09-20" },
  { id: 3, service: "Massagem", status: "Em andamento", date: "2025-10-05" },
];

function AppointmentsPage() {
  return (
    <div className="appointments-page">
      <div className="appointments-header">
        <h2>Meus Agendamentos</h2>
        <button className="new-btn">Novo Agendamento</button>
      </div>
      <ul className="appointments-list">
        {mockAppointments.map(appt => (
          <li key={appt.id} className={`appointment-card ${appt.status === "Em andamento" ? "active" : ""}`}>
            <div>
              <strong>{appt.service}</strong>
              <span>{appt.date}</span>
            </div>
            <span className="status">{appt.status}</span>
            {appt.status === "Em andamento" && (
              <button className="cancel-btn">Cancelar</button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AppointmentsPage;
