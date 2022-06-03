import { CollectionReference } from "firebase/firestore";
import "./Tittle.css"

export default function Tittle ({texto}){

    return(
        <h1 className="tittle" style={{textAlign:"center"}}> {texto} </h1>
    )
}