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
          <Link to="/">Home</Link>
          <Link to="/projects/prorp">PRORP Case Study</Link>
        </div>
      </nav>
    </header>
  );
}