import "./NavBar.css";

function NavBar() {
    return (
      <nav className="navbar bg-transparent">
        <div className="container-fluid">
          <a className="navbar-title">Agendify</a>
          <div className="buttons-container">
            <button><a href="/login">Entrar</a></button>
            <button><a href="/register">Cadastrar</a></button>
          </div>
        </div>
      </nav>
    );
}

export default NavBar;