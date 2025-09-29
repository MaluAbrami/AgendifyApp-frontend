import "./ServicesPage.css";
import NavBarSearch from "../../layouts/NavBarSearch/NavBarSearch";
import NavbarLateral from "../../components/NavbarLateral/NavbarLateral";

function ServicesPage() {
    return (
        <div className="services-page">
            <NavBarSearch />
            <div className="container">
                <NavbarLateral />
                <div className="container-content">

                </div>
            </div>
        </div>
    );
}

export default ServicesPage;