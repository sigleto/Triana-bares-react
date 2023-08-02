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
<<<<<<< HEAD
    <div className="parrafo"><p className="per">Aquí tienes una lista de establecimientos gastronómicos ubicados en TRIANA, categorizados como "BARES" y "RESTAURANTES".
        Todos los restaurantes de la lista aceptan reservas, aunque no todos los bares lo hacen.
        Además, todos los lugares catalogados como bares ofrecen tapas, mientras que algunos restaurantes también las sirven
        En la sección  <Link to="Formulario"> Contacto </Link> puedes proponer algún establecimiento que deseas que se incluya, correccciones o sugerencias.</p>
=======
    <div className="parrafo"><p className="per">Esta página contiene una relación de establecimientos gastronómicos distribuidos en las categorías de "BARES" y "RESTAURANTES".La principal diferencia entre ambas es que en todos los sitios incluidos como "restaurantes" se puede reservar. Ello no quiere decir que también lo puedas hacer en algunos bares.
        Así mismo, en los todos los establecimientos catalogados como "bares", se pueden pedir tapas, lo que tampoco implica que en algunos restaurantes también te las sirvan.
        En la sección de <Link to="/Formulario">contactos</Link> me puedes dejar algún establecimiento que eches de menos en la relación y lo incluiré sin problema.</p>
>>>>>>> 0fcc668b846797a02f599d70e22cbfb2c8a37d8e
     </div>
    </header>
        
        <Reloj/>
        
        
        </>
    )
}
export default Home
