import "./ServicesPage.css";
import NavbarLateral from "../../components/NavbarLateral/NavbarLateral";

function ServicesPage() {
    return (
        <div>
            <NavbarLateral />
            <div className="services-page">
                <div className="container-content">
                    <h1 className="services-title">Bem-vindo de volta!</h1>
                    <p className="services-desc">Gerencie seus agendamentos, explore serviços e personalize sua experiência.</p>
                    <div className="services-highlights">
                        <div className="highlight-card">
                            <h3>Agende com facilidade</h3>
                            <p>Veja seus agendamentos, marque novos e cancele quando necessário.</p>
                        </div>
                        <div className="highlight-card">
                            <h3>Serviços para você</h3>
                            <p>Encontre serviços de empresas parceiras, filtre por preço e empresa.</p>
                        </div>
                        <div className="highlight-card">
                            <h3>Perfil personalizado</h3>
                            <p>Atualize seus dados e preferências para uma experiência única.</p>
                        </div>
                    </div>
                    <button className="explore-btn" onClick={() => window.location.href = '/available-services'}>
                        Explorar Serviços
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ServicesPage;