import { NavLink } from "react-router-dom"

const Navbar = () => {
    return (
        <nav>
            <NavLink to="/form">Form</NavLink>
            <NavLink to="/">List</NavLink>
        </nav>
    )
}

export default Navbar