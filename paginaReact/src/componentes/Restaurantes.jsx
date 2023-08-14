import React,{useContext} from "react";
import Contexto from "../contexto/Contexto";
import '../estilos/bares.css'
const Restaurantes=()=>{
const {restaurantes}=useContext(Contexto)
    return(
       
<div className="contenido">
{restaurantes.map((item,index)=>(<div key={index} className="estab">  
     <div className="bar">{item.nombre}</div>
     <ul>
         <li><a href={item.ubicacion}>Ubicación</a></li>
         <li>{typeof item.reserva === 'string' && item.reserva.includes("http") ? (
        <a href={item.reserva}>Reserva una mesa</a>
    ) : (
        `Reservas: ${item.reserva}`
    )}</li>
         <li><a href={item.estrellas}>Valoración en TripAdvisor</a></li>
     </ul>
     <img className="fotos" src={item.imagen}/>
     </div>
     ))}
     
</div>


    )
}
export default Restaurantes
