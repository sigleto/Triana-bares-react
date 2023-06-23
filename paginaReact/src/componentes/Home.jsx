import React from "react";
import { Link } from "react-router-dom";
import Reloj from "../anexos/reloj";
import '../estilos/home.css'
import '../estilos/reloj.css'
const Home=()=>{

    return(

        <>
        <header class="container">
    <img src="/LogoJuan.png" alt="juan" class="img-thumbnail img-fluid"/>
    <div className="parrafo"><p>Esta página contiene una relación de establecimientos gastronómicos distribuidos en las categorías de "BARES" y "RESTAURANTES".La principal diferencia entre ambas es que en todos los sitios incluidos como restaurantes se puede reservar. Ello no quiere decir que también lo puedas hacer en algunos bares.
        Así mismo, en los todos los establecimientos catalogados como bares, se pueden pedir tapas, lo que, tampoco implica que en algunos restaurantes también te las sirvan.
        En la sección de <Link to="/formulario" target="_blank">contactos</Link> me puedes dejar algún establecimiento que eches de menos en la relación y lo incluiré sin problema.</p>
     </div>
    </header>
        
        <Reloj/>
        
        
        </>
    )
}
export default Home