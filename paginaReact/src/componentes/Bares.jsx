import React,{useContext} from "react";
import Contexto from "../contexto/Contexto";
import '../estilos/bares.css'
const Bares=()=>{
const {bares}=useContext(Contexto)
    return(
       
<div className="contenido">
{bares.map((item,index)=>(<div key={index} className="estab">  
     <div className="bar">{item.nombre}</div>
     <ul>
         <li><a href={item.ubicacion}>Ubicación</a></li>
         <li><a href={item.reserva}>Reserva una mesa</a></li>
         <li><a href={item.estrellas}>Estrellas de TripAdvisor</a></li>
     </ul>
     <img className="fotos" src={item.imagen}/>
     </div>))}
     
</div>


    )
}
export default Bares
