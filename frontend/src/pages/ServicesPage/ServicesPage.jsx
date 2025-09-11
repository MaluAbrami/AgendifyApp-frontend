import "./ServicesPage.css";

function ServicesPage() {
    return (
        <div>
            <div className="services-nav-bar">
                <h1 className="title-app">Agendify</h1>
            </div>
            <div className="services-container">
                <div className="services-lateral-box">
                    <div className="lateral-menu">
                        <ul>
                            <li><a href="#">Novo Agendamento</a></li>
                            <li><a href="#">Histórico</a></li>
                            <li><a href="#">Minha Conta</a></li>
                            <li><a href="#">Configurações</a></li>
                            <li><a href="#">Sair</a></li>
                        </ul>
                    </div>
                </div>
                <div className="container mt-5">
                    <h1 className="text-center text-primary">Olá Bootstrap no React!</h1>

                    <div className="d-flex justify-content-center mt-4">
                        <button className="btn btn-success me-3">Botão Verde</button>
                        <button className="btn btn-danger">Botão Vermelho</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ServicesPage;