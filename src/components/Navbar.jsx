
import { useState } from "react";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const closeMenu = () => setMenuOpen(false);

    return (
        <header className="navbar">
            <a className="brand" href="#home" onClick={closeMenu}>
                xn<span>trova</span><i>.</i>
            </a>

            <button
                className="menu-toggle"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle navigation menu"
                aria-expanded={menuOpen}
            >
                {menuOpen ? "✕" : "☰"}
            </button>

            <nav className={menuOpen ? "nav-links open" : "nav-links"}>
                <a href="#home" onClick={closeMenu}>Home</a>
                <a href="#about" onClick={closeMenu}>About</a>
                <a href="#services" onClick={closeMenu}>Services</a>
                <a href="#work" onClick={closeMenu}>Our Work</a>
                <a href="#contact" onClick={closeMenu}>Contact</a>
                <a className="nav-cta" href="#contact" onClick={closeMenu}>
                    Let's Talk <span>↗</span>
                </a>
            </nav>
        </header>
    );
}

export default Navbar;
