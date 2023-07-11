import React,{useState} from "react";
import { NavLink,Link } from "react-router-dom";

import '../estilos/establecimientos.css'
const Establecimientos=()=>{
const url_cena = `https://www.thefork.es/search?cc=16774-c1d&cityId=506461&date=2023-07-18&gclid=CjwKCAjw2K6lBhBXEiwA5RjtCR9RXrvwrakxJqAKcnJ28kd4etMkS5mKIGIx4WTPrKd1WRuf7J32gBoC6tkQAvD_BwE&hour=1290&partySize=2&restaurantTagId[]=1062&timezone=Europe%2FMadrid`;
    const url_comida = `https://www.thefork.es/search?cc=16774-c1d&cityId=506461&date=2023-07-18&gclid=CjwKCAjw2K6lBhBXEiwA5RjtCR9RXrvwrakxJqAKcnJ28kd4etMkS5mKIGIx4WTPrKd1WRuf7J32gBoC6tkQAvD_BwE&hour=840&partySize=2&restaurantTagId[]=1062&timezone=Europe%2FMadrid`;

     return (
    <>    
    <div className="cate"> 
          Antes de entrar en materia, consulta la disponibilidad para hoy:<br></br>
    <NavLink className="disponible" to={url_comida}>Con disponibilidad para comida</NavLink><br></br>   
     <NavLink className="disponible" to={url_cena}>Con disponibilidad para cena</NavLink>   
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
