import { NavLink } from "react-router-dom"

function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="logo">Portfolio</h1>

      <div className="menu">
        <NavLink to="/">Accueil</NavLink>
        <NavLink to="/about">À propos</NavLink>
        <NavLink to="/projects">Projets</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div>
    </nav>
  )
}

export default Navbar