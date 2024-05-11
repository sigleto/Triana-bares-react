import React from "react";
import { NavLink } from "react-router-dom";
import "../estilos/establecimientos.css";

const Establecimientos = () => {
  const fecha = new Date();
  const mes = fecha.getMonth() + 1;
  const dia = fecha.getDate();
  const año = fecha.getFullYear();

  const url_cena = `https://www.thefork.es/search?cc=16774-c1d&cityId=506461&date=${año}-0${mes}-${dia}&gclid=CjwKCAjw2K6lBhBXEiwA5RjtCR9RXrvwrakxJqAKcnJ28kd4etMkS5mKIGIx4WTPrKd1WRuf7J32gBoC6tkQAvD_BwE&hour=1290&partySize=2&restaurantTagId[]=1062&timezone=Europe%2FMadrid`;
  const url_comida = `https://www.thefork.es/search?cc=16774-c1d&cityId=506461&date=${año}-0${mes}-${dia}&gclid=CjwKCAjw2K6lBhBXEiwA5RjtCR9RXrvwrakxJqAKcnJ28kd4etMkS5mKIGIx4WTPrKd1WRuf7J32gBoC6tkQAvD_BwE&hour=840&partySize=2&restaurantTagId[]=1062&timezone=Europe%2FMadrid`;

  return (
    <div className="container">
      <div className="content">
        <div className="info">
          <p>Antes de entrar en materia, consulta la disponibilidad para hoy en la página de <strong>"thefork.es"</strong>:</p>
        </div>
        <div className="links">
          <NavLink className="link" to={url_comida} target="_blank">
            Con disponibilidad para comida
          </NavLink>
          <NavLink className="link" to={url_cena} target="_blank">
            Con disponibilidad para cena
          </NavLink>
        </div>
      </div>
      <h2 className="title">Elige categoría:</h2>
      <div className="categories">
        <NavLink className="category" to="/bares">
          BARES
        </NavLink>
        <NavLink className="category" to="/restaurantes">
          RESTAURANTES
        </NavLink>
      </div>
    </div>
  );
};

export default Establecimientos;