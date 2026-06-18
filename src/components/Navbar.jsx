import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <span className="logo-icon">⚽</span>
          <span className="logo-text">Football Hub</span>
        </Link>

        <div className="navbar-menu">
          <Link
            to="/"
            className={`navbar-link ${isActive('/') ? 'active' : ''}`}
          >
            Home
          </Link>
          <Link
            to="/fixtures"
            className={`navbar-link ${isActive('/fixtures') ? 'active' : ''}`}
          >
            Fixtures
          </Link>
          <Link
            to="/leagues"
            className={`navbar-link ${isActive('/leagues') ? 'active' : ''}`}
          >
            Leagues
          </Link>
          <Link
            to="/news"
            className={`navbar-link ${isActive('/news') ? 'active' : ''}`}
          >
            News
          </Link>
        </div>

        <div className="navbar-end">
          <button className="btn btn-primary">Sign In</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
