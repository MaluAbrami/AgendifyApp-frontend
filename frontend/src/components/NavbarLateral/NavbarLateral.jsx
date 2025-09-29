import "./NavbarLateral.css";
import { Link } from "react-router-dom";

function NavbarLateral() {
    return (
        <div className="navbar-lateral">
            <ul>
                <li><Link to="/appointments">Meus Agendamentos</Link></li>
                <li><Link to="/available-services">Serviços</Link></li>
                <li><Link to="/profile">Perfil</Link></li>
                <li><Link to="/settings">Configurações</Link></li>
                <li><Link to="/logout">Sair</Link></li>
            </ul>
        </div>
    );
}

export default NavbarLateral;