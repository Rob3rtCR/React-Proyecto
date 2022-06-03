import React from 'react'
import { Nav } from 'react-bootstrap';
import { FaGithub , FaLinkedinIn, FaInstagram } from "react-icons/fa";
import "./footer.css"

function Footer() {
    return (

        <>
            <footer className='bg-dark'>
                <Nav className='navFooter' activeKey="/home">
                    <Nav.Item>
                        <Nav.Link className='navItem' href='https://github.com/Rob3rtCR'><FaGithub/></Nav.Link>
                    </Nav.Item>
                    <Nav.Item >
                        <Nav.Link className='navItem' href='https://www.linkedin.com/in/roberto-carlos-ramirez-aa6a61200/'><FaLinkedinIn/></Nav.Link>
                    </Nav.Item><Nav.Item >
                        <Nav.Link className='navItem' href='https://www.instagram.com/betualxielo/'><FaInstagram/></Nav.Link>
                    </Nav.Item>
                </Nav>
                <p className="text-left mt-1 ">Designed by RC Ramirez</p>
            </footer>
        </>

    )
}

export default Footer