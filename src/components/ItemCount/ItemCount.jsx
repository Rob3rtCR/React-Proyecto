import React, { useContext, useState } from "react";
import { CartContext } from "../ContexCart";
import "./itemCount.css";
import "../Item/Item"

function ItemCount({ initial, stock, item }) {
  const [cant, setcant] = useState(initial);

  const { onAdd } = useContext(CartContext);
  return (
    <div>
      <div className="add">
        <button
          style={{
            borderRadius: "00.65em",
            fontWeight: "600",
            backgroundColor: "rgb(255, 20, 98)",
            color: "black",
            padding: "0.9rem",
            boxShadow:  "inset 0px 0px 0.5em 0px rgb(255, 20, 98), 0em 0em 0.5em 0 rgb(255, 20, 98)",
          }}
          onClick={() => {
            if (cant > 0) {
              setcant(cant - 1);
            }
          }}
        >
          -
        </button>
        <p
          style={{
            borderRadius: "00.65em",
            fontWeight: "600",
            margin: "0 4px",
            backgroundColor: "rgb(172, 172, 172)",
            color: "black",
            padding: "0.8rem",
          }}
        >
          {cant}
        </p>
        <button
          style={{
            borderRadius: "00.65em",
            fontWeight: "600",
            backgroundColor: "rgb(20, 255, 145)",
            color: "black",
            padding: "0.8rem",
            boxShadow:  "inset 0px 0px 0.5em 0px rgb(20, 255, 145), 0em 0em 0.5em 0 rgb(20, 255, 145)",
          }}
          onClick={() => {
            setcant(cant + 1);
          }}
        >
          +
        </button>
      </div>
      <div></div>
      <p style={{ textAlign: "center", color: "hsl(317 100% 54%" }}>stock disponible {stock}</p>
      <div>
        <button
          className="addCart"
          disabled={cant === 0}
          onClick={cant > stock ? null : () => onAdd({ ...item, cant })}
        >
          Agregar al carro
        </button>
      </div>
    </div>
  );
}

export default ItemCount;
