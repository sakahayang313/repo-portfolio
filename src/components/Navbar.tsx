import { Link } from 'react-router-dom';
import logoNavbar from '../assets/logo-navbar.png';

export default function Navbar() {
  return (
    <header className="app-container">
      <nav className="navbar">
        <Link to="/" className="navbar-logo" aria-label="Home">
          <img src={logoNavbar} alt="QaritsaDEV" className="logo-image" />
        </Link>
        <div className="navbar-links">
          <a href="/">Home</a>
          <a href="/projects">Projects</a>
          <a href="/#about">About</a>
          <a href="/#contact">Contact</a>
        </div>
      </nav>
    </header>
  );
}