import StandingTable from '../components/StandingTable';
import LeagueCard from '../components/LeagueCard';
import { leagues, standings } from '../services/mockData';
import './Leagues.css';

function Leagues() {
  return (
    <div className="leagues-page">
      <div className="container">
        <div className="leagues-header">
          <h1>Top Leagues</h1>
          <p>Explore the world's leading football leagues and standings</p>
        </div>

        <div className="leagues-grid">
          {leagues.map((league) => (
            <LeagueCard key={league.id} league={league} />
          ))}
        </div>

        {/* Featured League Standings */}
        <section className="featured-standings">
          <h2>Premier League Standings</h2>
          <StandingTable standings={standings} league="Premier League" />
        </section>
      </div>
    </div>
  );
}

export default Leagues;
