import "./NavbarLateral.css";

function NavbarLateral() {
    return (
        <div className="navbar-lateral">
            <ul>
                <li><a href="/appointments">Meus Agendamentos</a></li>
                <li><a href="/services">Serviços</a></li>
                <li><a href="/profile">Perfil</a></li>
                <li><a href="/settings">Configurações</a></li>
                <li><a href="/logout">Sair</a></li>
            </ul>
        </div>
    );
}

export default NavbarLateral;