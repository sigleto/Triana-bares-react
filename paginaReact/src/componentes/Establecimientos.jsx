import React from "react";
import Bares from "./Bares";
import Restaurantes from "./Restaurantes";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import '../estilos/establecimientos.css'
const Establecimientos=()=>{


    return (
    <>
    <div className="cate">      
    <h2>Elige categoría:</h2>
    
    <ul className="lista">
    <NavLink to="/bares" target="_blank">BARES</NavLink><br></br><br></br>
    <NavLink to="/restaurantes" target="_blank">RESTAURANTES</NavLink>
        
    </ul>
    </div> 
    </>
)
}
export default Establecimientos