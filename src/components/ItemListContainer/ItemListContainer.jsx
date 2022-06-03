import React, { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import Tittle from "../Tittle/Tittle";
import { Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";

function ItemListContainer() {
  const [productos, setproductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const { mark } = useParams();

  useEffect(() => {
    setLoading(true);
    const db = getFirestore();
    if (mark) {
      const searchMark = query(
        collection(db, "productos"),
        where("mark", "==", mark)
      );
      getDocs(searchMark).then((res) => {
        setproductos(res.docs.map((i) => ({ id: i.id, ...i.data() })));
        setLoading(false);
      });
    } else {
      const searchCollection = collection(db, "productos");
      getDocs(searchCollection).then((res) => {
        setproductos(res.docs.map((i) => ({ id: i.id, ...i.data() })));
        setLoading(false);
      });
    }
  }, [mark]);

  return (
    <>
      <Tittle className="title" texto={"Acceso Vertical Argentina"} />
      <div
        style={{
          width: "90%",
          padding: "4rem",
          margin: "auto",
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          fontStyle: "oblique",
        }}
      >
        {loading ? (
          <div
            style={{
              color:"hsl(317 100% 54%",
              display: "flex",
              height: "300px",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            {" "}
            <h1> Cargando productos </h1> <Spinner animation="grow" />
          </div>
        ) : (
          <ItemList productos={productos}></ItemList>
        )}
      </div>
    </>
  );
}

export default ItemListContainer;
