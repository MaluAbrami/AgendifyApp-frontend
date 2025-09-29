import NavBar from "../../layouts/NavBar/NavBar";
import "./HomePage.css";

function Home() {
    return (
        <div className="home-page">
            <NavBar />

            <div className="home-content">
                <h1>Bem-vindo ao Agendify!</h1>
                <p>
                    O Agendify é a plataforma ideal para facilitar agendamentos de serviços de diversas empresas em um só lugar.
                </p>
                <ul>
                    <li>Clientes podem encontrar e agendar serviços de forma rápida e prática.</li>
                    <li>Empresas podem se cadastrar, divulgar seus serviços e gerenciar seus agendamentos facilmente.</li>
                    <li>Agende cortes de cabelo, consultas, aulas, reparos e muito mais!</li>
                </ul>
                <p>
                    Cadastre-se agora e aproveite a praticidade de organizar seus compromissos com apenas alguns cliques!
                </p>
            </div>
        </div>
    );
}

export default Home;