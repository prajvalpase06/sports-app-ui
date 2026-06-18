import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>Football Hub</h4>
          <p>Your ultimate destination for live football fixtures, standings, and news.</p>
        </div>

        <div className="footer-section">
          <h5>Quick Links</h5>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/fixtures">Fixtures</Link></li>
            <li><Link to="/leagues">Leagues</Link></li>
            <li><Link to="/news">News</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h5>Follow Us</h5>
          <div className="social-links">
            <a href="#" target="_blank" rel="noopener noreferrer">Twitter</a>
            <a href="#" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="#" target="_blank" rel="noopener noreferrer">Instagram</a>
          </div>
        </div>

        <div className="footer-section">
          <h5>Legal</h5>
          <ul>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2026 Football Hub. All rights reserved. | Made with ⚽ and passion</p>
      </div>
    </footer>
  );
}

export default Footer;
