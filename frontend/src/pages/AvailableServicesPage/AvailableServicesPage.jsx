import "./AvailableServicesPage.css";
import { useState } from "react";

const mockServices = [
  { id: 1, name: "Corte de cabelo", company: "Barbearia Top", price: 40 },
  { id: 2, name: "Manicure", company: "Salão Bela", price: 30 },
  { id: 3, name: "Massagem", company: "Spa Zen", price: 80 },
];

function AvailableServicesPage() {
  const [filter, setFilter] = useState("");
  const [price, setPrice] = useState(100);

  const filtered = mockServices.filter(s =>
    s.company.toLowerCase().includes(filter.toLowerCase()) && s.price <= price
  );

  return (
    <div className="services-page-list">
      <h2>Serviços Disponíveis</h2>
      <div className="filters">
        <input
          type="text"
          placeholder="Filtrar por empresa"
          value={filter}
          onChange={e => setFilter(e.target.value)}
        />
        <input
          type="range"
          min={0}
          max={100}
          value={price}
          onChange={e => setPrice(Number(e.target.value))}
        />
        <span>Até R$ {price}</span>
      </div>
      <ul className="services-list">
        {filtered.map(service => (
          <li key={service.id} className="service-card">
            <strong>{service.name}</strong>
            <span>{service.company}</span>
            <span>R$ {service.price}</span>
            <button className="agendar-btn">Agendar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AvailableServicesPage;
