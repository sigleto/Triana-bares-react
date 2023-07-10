import React,{useState} from "react";
import { NavLink,Link } from "react-router-dom";

import '../estilos/establecimientos.css'
const Establecimientos=()=>{
    
    <>
    
    
    <div className="cate">   
   
    </div>
    <h2>Elige categoría:</h2>
    
    <ul className="lista">
    <NavLink to="/bares" >BARES</NavLink><br></br><br></br>
    <NavLink to="/restaurantes" >RESTAURANTES</NavLink>
        
    </ul>
    </div> 
    </>
)
} 
export default Establecimientos
