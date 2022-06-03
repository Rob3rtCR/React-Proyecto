import { FaRocket } from "react-icons/fa";
import { Link } from "react-router-dom";
import { CartContext } from '../ContexCart'
import React, { useContext } from 'react'

export default function CartWidget() {
    const { totalCount } = useContext(CartContext)
    return (
        <>
            <Link to={'/cart'} style={{ padding: "0.25em", color: "hsl(317 100% 54%)", fontSize: "1.9rem", boxShadow:  "inset 0px 0px 0.5em 0px var(--clr-neon), 0em 0em 0.5em 0 var(--clr-neon)", borderRadius: "00.45em" }} >
                <FaRocket/>({totalCount})
            </Link>
        </>
    )
}