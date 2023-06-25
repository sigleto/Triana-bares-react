import { NavLink } from "react-router-dom";
import './estilos/navegador.css'
const Nav=()=>{


    return(
    <nav className="navegador">
        <NavLink className="nav" to="/"><span className="titulin">PÁGINA PRINCIPAL</span></NavLink>
        <NavLink className="nav" to="/establecimientos"><span className="titulin">ESTABLECIMIENTOS</span></NavLink>
        <NavLink className="nav" to="/formulario"><span className="titulin">CONTACTO</span></NavLink>
    </nav>

    )
}
export default Nav