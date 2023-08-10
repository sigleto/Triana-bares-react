import React from "react";
import { Link } from "react-router-dom";
import Reloj from "../anexos/reloj";
import '../estilos/home.css'
import '../estilos/reloj.css'
const Home=()=>{

    return(

        <>

         
    <header className="container">
    <img className='logo'src="/LogoJuan.png" alt="juan" />
    <img className='imagen' src="principal.webp" alt="juan" />
    <div className="parrafo"><p className="per">Aquí tienes una lista de establecimientos gastronómicos ubicados en TRIANA, categorizados como <Link to='Bares'>BARES</Link> y <Link to="Restaurantes">RESTAURANTES</Link>.
        Todos los restaurantes de la lista aceptan reservas, aunque no todos los bares lo hacen.
        Además, todos los lugares catalogados como bares ofrecen tapas, mientras que algunos restaurantes también las sirven
        En la sección  <Link to="Formulario"> Contacto </Link> puedes proponer algún establecimiento que deseas que se incluya, correccciones o sugerencias.</p>
     </div>
    </header>
        
        <Reloj/>
        
        
        </>
    )
}
export default Home
