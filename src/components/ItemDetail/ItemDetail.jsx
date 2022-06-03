import React from 'react'
import './itemDetail.css'; 
import ItemCount from '../ItemCount/ItemCount';
import { Link } from "react-router-dom";

function ItemDetail({ product }) {


  return (
    <>
      <div className='detailContainer'>
        <div className='detail'>
        <div><img src={product.logo} alt="" className='logo' /></div>
          <div>
            <img src={product.img} alt="img" />
          </div>
          <div>
            <div className='description' >
              <h2>Modelo:  {product.model}</h2>
              <h3>Precio: u$s {product.price}</h3>
              <h4>Stock: {product.stock}</h4>
            </div>
          </div>
              <ItemCount className="addCart" initial={0} stock={product.stock} key={product.id} item={product} />
              <Link className='buttonCart' to={'/Cart'}>Ir al Carrito</Link>
        </div>
      </div>
    </>
  )
}

export default ItemDetail