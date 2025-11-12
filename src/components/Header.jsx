import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/logo.png";
import "./Header.css";


export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <Link to="/">
        <img src={logo} alt="Logo" className="logo" />
      </Link>

      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </div>

      <nav className={`nav ${menuOpen ? "open" : ""}`}>
        <Link to="/" className="nav-link" onClick={() => setMenuOpen(false)}>Home</Link>

        <div className="dropdown">
  <span className="nav-link">Products ▼</span>
  <div className="dropdown-content">
    <Link to="/PackagingProducts" onClick={() => setMenuOpen(false)}>Packaging Products</Link> <br />
    <Link to="/ElectricalProducts" onClick={() => setMenuOpen(false)}>Electrical Products</Link>
  </div>
</div>

        <Link to="/about" className="nav-link" onClick={() => setMenuOpen(false)}>About</Link>
        <Link to="/contact" className="nav-link" onClick={() => setMenuOpen(false)}>Contact</Link>
      </nav>
    </header>
  );
}
