import React from "react";
import Bares from "./Bares";
import Restaurantes from "./Restaurantes";
import { Link } from "react-router-dom";
import '../estilos/establecimientos.css'
const Establecimientos=()=>{


    return (
    <>
    <div className="cate">      
    <h2>Elige categoría:</h2>
    
    <ul className="lista">
    <Link to="/bares" target="_blank">BARES</Link><br></br><br></br>
    <Link to="/restaurantes" target="_blank">RESTAURANTES</Link>
        
    </ul>
    </div> 
    </>
)
}
export default Establecimientos