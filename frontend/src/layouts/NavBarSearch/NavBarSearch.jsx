import "./NavBarSearch.css"; 

function NavBarSearch() {
  return (
    <nav class="navbar bg-trasnparent">
      <div class="container-fluid">
        <a className="navbar-title">Agendify</a>
        <form class="d-flex" role="search">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Buscar..."
            aria-label="Search"
          />
          <button className="search-button" type="submit">
            Buscar
          </button>
        </form>
      </div>
    </nav>
  );
}

export default NavBarSearch;
