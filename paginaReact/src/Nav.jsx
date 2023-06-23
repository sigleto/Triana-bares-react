import { NavLink } from "react-router-dom";
import './estilos/navegador.css'
const Nav=()=>{


    return(
    <nav className="navegador">
        <NavLink className="nav" to="/">PÁGINA PRINCIPAL</NavLink>
        <NavLink className="nav" to="/establecimientos">ESTABLECIMIENTOS</NavLink>
        <NavLink className="nav" to="/formulario">CONTACTO</NavLink>
    </nav>

    )
}
export default Nav