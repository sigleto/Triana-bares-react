import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Clima from "../anexos/clima";
import '../estilos/formulario.css';
import { useNavigate } from "react-router-dom";


const Formulario = () => {
  const { register, handleSubmit,reset, formState: { errors } } = useForm();
  const navigate = useNavigate(); // Obtener la función navigate
  
  const accion = async (datos) => {
    try {
      await fetch("https://pagina-react-para-vercel.vercel.app/formulario", {
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify(datos),
        headers: { "Content-Type": "application/json" }
      });
      console.log("Datos enviados correctamente");
      reset();
      navigate('/')
    } catch (error) {
      console.log("Error al enviar los datos:", error);
    } 
  
  };

  return (
    <>
    <div className="contForm">
    
      <form className="formulario"onSubmit={handleSubmit(accion)}>
        <div className="campos">
          <label htmlFor="Alias"><p>*Alias</p></label>
          <input id="Alias" placeholder="Introduce tu alias" {...register("alias", { required: true })} />
        </div>
        <div className="preferencias">
          <label htmlFor="preferencias"><p>Preferencias</p></label>
          <input type="radio" name="sitios" value="bares" {...register("preferencias")} />Bares, tascas y demás<br></br>
          <input type="radio" name="sitios" value="restaurantes" {...register("preferencias")} />Restaurantes y similares<br></br>
        </div>
        <div className="campos">
          <label htmlFor="email"><p>E-Mail</p></label>
          <input className="inputc" id="email" placeholder="Sólo si quieres que te contestemos" {...register("correo", { pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/ })} />
        </div>
        
        <div className="campos comentarios">
          <label htmlFor="comentarios"><p>COMENTARIOS</p></label>
          <textarea id="comentarios" placeholder="Puedes enviar algún establecimiento que deseas que incluyamos,correción o sugerencia" {...register("comentarios")} />
        </div>
        <input type="submit" value="ENVIAR DATOS" />
        {errors.alias?.type === "required" && <div><p>Es obligatorio ingresar un alias</p></div>}
        {errors.correo?.type === "pattern" && <div><p>Eso no es un correo válido</p></div>}
        
      </form>
      <img src="imagen-contactos.jpg" className="pulpito"alt="pulpito"/>
      
      </div>
      <Clima />
    </>
  );
};

export default Formulario;
