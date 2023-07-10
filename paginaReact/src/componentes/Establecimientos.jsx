import React,{useState} from "react";
import { NavLink,Link } from "react-router-dom";

import '../estilos/establecimientos.css'
const Establecimientos=()=>{
    const [año,setAño]=useState('')
    const [mes,setMes]=useState('')
    const [dia,setDia]=useState('')

    let url="https://www.el-tiempo.net/api/json/v2/provincias/41/municipios/41091";


    fetch(url)
    .then(res=>res.json())
    
    .then(resJSON=>{
    let datos=resJSON
    
            setDia((datos.fecha).toString().substring(8, 10));
            setMes((datos.fecha).toString().substring(5, 7));
            setAño((datos.fecha).toString().substring(0, 4));
     })
    .catch(err=>console.log(err)); 
 

const URL_comida=`https://www.thefork.es/search?cc=16774-c1d&cityId=506461&date=${año}-${mes}-${dia}&gclid=CjwKCAjw2K6lBhBXEiwA5RjtCR9RXrvwrakxJqAKcnJ28kd4etMkS5mKIGIx4WTPrKd1WRuf7J32gBoC6tkQAvD_BwE&hour=840&partySize=2&restaurantTagId[]=1062&timezone=Europe%2FMadrid`
const URL_cena= `https://www.thefork.es/search?cc=16774-c1d&cityId=506461&date=${año}-${mes}-${dia}&gclid=CjwKCAjw2K6lBhBXEiwA5RjtCR9RXrvwrakxJqAKcnJ28kd4etMkS5mKIGIx4WTPrKd1WRuf7J32gBoC6tkQAvD_BwE&hour=1290&partySize=2&restaurantTagId[]=1062&timezone=Europe%2FMadrid`;
    return (
    <>
    
    
    <div className="cate">   
    Antes de entrar en materia, mira si quieres lo que hay disponible para hoy:<br></br>
    <div className="disponible">
    <Link className='url'to= {URL_comida} target="_blank">DISPONIBLE PARA COMIDA</Link><br></br><br></br>
    <Link className='url'to={URL_cena} target="_blank">DISPONIBLE PARA CENA</Link><br></br><br></br>
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