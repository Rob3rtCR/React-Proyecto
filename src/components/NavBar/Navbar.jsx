import CartWidget from "../CartWidget/Cartwidget";
import { FaHome } from "react-icons/fa";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./navbar.css";

export default function NavBar() {
  const section = ["Petzl", "Edelrid", "Edelweiss", "Rock Empire"];

  return (
    <Navbar expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>
          <Link to={"/"} className="navLink">
          <FaHome />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="nav1">
            {section.map((i) => (
              <Link className="navMarcas" to={`/category/${i}`}>
                {i}
              </Link>
            ))}
          </Nav>
        </Navbar.Collapse>
        <CartWidget />
      </Container>
    </Navbar>
  );
}
