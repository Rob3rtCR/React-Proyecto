import React from 'react'
import Item from '../Item/Item'
import "./itemList.css"




function ItemList({ productos }) {
  return (
    <div className='ItemList'>

      {productos.map((i) =>
        <>
          <Item
            key={i.id}
            id={i.id}
            model={i.model}
            mark={i.mark}
            img={i.img}
            price={i.price}
            stock={i.stock} />
        </>)}
    </div>
  )
}

export default ItemList




