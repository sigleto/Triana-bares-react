import React, { useState } from "react";

const Clima=()=>{
    const [año,setAño]=useState('')
    const [mes,setMes]=useState('')
    const [dia,setDia]=useState('')
    const [temperatura,setTemperatura]=useState('')
    const [max,setMax]=useState('')
    const [min,setMin]=useState('')
    const [estado,setEstado]=useState('')
    const [lluvia,setLluvia]=useState('')

    
let url="https://www.el-tiempo.net/api/json/v2/provincias/41/municipios/41091";


fetch(url)
.then(res=>res.json())

.then(resJSON=>{
let datos=resJSON

        setDia((datos.fecha).toString().substring(8, 10));
        setMes((datos.fecha).toString().substring(5, 7));
        setAño((datos.fecha).toString().substring(0, 4));
        setTemperatura(datos.temperatura_actual);
        setMax(datos.temperaturas.max);
        setMin(datos.temperaturas.min);
        setEstado(datos.stateSky.description);
        setLluvia(datos.precipitacion);

})
       
        .catch(err=>console.log(err)); 
        
    

    return(

        <>
        <div className="contenidos">
        <h3>Tiempo actual</h3>
        
        <p>Fecha:<span className="fecha">{dia}-{mes}-{año}</span><br></br></p>
        <p>Temperatura actual:<span className="temperatura">{temperatura}º</span><br></br></p>
        <p>Maxima:<span className="temp_max"> {max}º </span> mínima:<span className="temp_min">{min}º</span><br></br></p>
        <p>Estado del cielo:<span className="estado"> {estado}</span><br></br></p>
        <p>Posibilidad de lluvia:<span className="lluvia"> {lluvia} %</span></p>
        </div>
        </>


    )
}

export default Clima