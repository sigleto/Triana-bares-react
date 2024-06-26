import React from "react";
import { Link } from "react-router-dom";
import Reloj from "../anexos/reloj";
import '../estilos/home.css'
import '../estilos/reloj.css'
const Home=()=>{

    return(

        <>

         
    <header className="container">
    
    <img className='imagen' src="principal.webp" alt="juan" />
    <div className="parrafo"><p className="per">Descubre una variedad de locales gastronómicos en el encantador barrio de Triana, categorizados como  <Link to='Bares'>BARES</Link> y <Link to="Restaurantes">RESTAURANTES</Link>. Todos los restaurantes aceptan reservas, aunque no todos los bares lo hacen. Por otro lado, en todos los bares puedes pedir tapas, aunque en los restaurantes esta opción depende del establecimiento.
     En la sección  <Link to="Formulario"> Contacto </Link> puedes proponer algún establecimiento que deseas que se incluya, correcciones o sugerencias.</p>
     </div>
    </header>
        
        <Reloj/>
        
        
        </>
    )
}
export default Home
