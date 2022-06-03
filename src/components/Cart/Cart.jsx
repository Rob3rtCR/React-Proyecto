import React, { useContext } from 'react'
import { CartContext } from '../ContexCart'
import { ImCross } from "react-icons/im";
import { Link } from 'react-router-dom';
import "./Cart.css"

function Cart() {
  const { cart, totalPrice, removeItemCart } = useContext(CartContext)
  return (
    <>
      <div style={{ width: '100%', padding: "4rem", margin: "auto", display: "flex", justifyContent: "center" }}>
        <h1 className='carrito'>Carro</h1>
      </div>
      <div style={{ width: '100%', padding: "4rem", margin: "auto", display: "flex", flexDirection: "column", alignItems: "center" }}>
        {cart.length > 0 ? (cart.map(i =>
          <div >
            <h1 className='checkOut'>Producto Marca: {i.mark}</h1>
            <h2 className='checkOut'>Producto Modelo: {i.model}</h2>
            <p className='checkOut'>Cantidad: {i.cant}</p>
            <p className='checkOut'>Precio Unitario: u$s {i.price}</p>
            <button onClick={() => removeItemCart(i.id)}> Eliminar  <ImCross /></button>
          </div>
        )) :
          <div>
            <h2 className='carritoVacio'> Carrito Vacio</h2>
            <Link to={"/"}><button className='irAcomprar'>Ir a Comprar</button> </Link>
          </div>}
        <div style={{ margin: "2rem 0" }}>
          <h1 className='total'>Total :u$s {totalPrice}</h1>
          {cart.length > 0 ?(<Link to={"/FormCheckOut"} style={{ color: "hsl(317 100% 54%)", width: "200px", padding: "1rem", textAlign: "center" , textDecoration:"none" }}>Finalizar Compra </Link>):""}
        </div>
      </div>
    </>
  )
}

export default Cart