import "./AvailableServicesPage.css";
import { useState, useEffect } from "react";
import AvailableServices from "../../services/AvailableServices/AvailableServices";
import CompaniesService from "../../services/Companies/CompaniesService";

function AvailableServicesPage() {
  const [filter, setFilter] = useState("");
  const [price, setPrice] = useState(100);
  const [services, setServices] = useState([]);
  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      setError("");
      try {
        const [servicesData, companiesData] = await Promise.all([
          AvailableServices.getAllServices(),
          CompaniesService.getAllCompanies()
        ]);
        setServices(servicesData);
        setCompanies(companiesData);
      } catch (err) {
        setError("Erro ao carregar serviços ou empresas");
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  // Helper para pegar nome da empresa pelo id
  const getCompanyName = (companyId) => {
    const company = companies.find(c => c.id === companyId);
    return company ? company.name : companyId;
  };

  const filtered = services.filter(s =>
    getCompanyName(s.companyId).toLowerCase().includes(filter.toLowerCase()) && s.price <= price
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
      {loading ? (
        <div>Carregando...</div>
      ) : error ? (
        <div className="text-danger">{error}</div>
      ) : (
        <ul className="services-list">
          {filtered.map(service => (
            <li key={service.id} className="service-card">
              <strong>{service.name}</strong>
              <span>{service.description}</span>
              <span>R$ {service.price}</span>
              <span>{service.durationTime} minutos</span>
              <span>{getCompanyName(service.companyId)}</span>
              <button className="agendar-btn">Agendar</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default AvailableServicesPage;
