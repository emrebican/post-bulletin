import { NavLink } from "react-router-dom";
import { Nav } from "./navbar_styled";

const Navbar = () => {
    return (
        <Nav>
            <NavLink to="/form">Form</NavLink>
            <NavLink to="/">List</NavLink>
        </Nav>
    )
}

export default Navbar