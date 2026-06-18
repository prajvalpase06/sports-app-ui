import { Link } from 'react-router-dom';
import './LeagueCard.css';

function LeagueCard({ league }) {
  return (
    <Link to={`/leagues`} className="league-card-link">
      <div
        className="league-card"
        style={{
          '--league-color': league.color,
          '--league-accent': league.accentColor,
        }}
      >
        <div className="league-header">
          <span className="league-logo">{league.logo}</span>
        </div>
        <div className="league-content">
          <h3 className="league-name">{league.name}</h3>
          <p className="league-country">{league.country}</p>
          <button className="btn btn-outline btn-sm">View Standings</button>
        </div>
      </div>
    </Link>
  );
}

export default LeagueCard;
