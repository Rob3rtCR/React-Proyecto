import { Link } from "react-router-dom";
import React from "react";
import "./item.css"

export default function Item({ mark, id, model, img, price, stock }) {

  return (
    <div className="item" key={id}>
      <div className="item-info">
        <h2 className="item-title">{mark}</h2>
        <h3 className="item-title">{model}</h3>
        <div>
          <img className="imgItem" src={img} alt="logo" />
        </div>
        <h4 className="precio">Precio: u$s {price}</h4>
        <h5 className="precio">Stock: {stock}</h5>
        <Link className="buttonBuy" to={`/productos/item/${id}`}>Caracteristicas</Link>
      </div>
    </div>
  );
};