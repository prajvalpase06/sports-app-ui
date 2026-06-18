import { useState, useEffect } from 'react';
import HeroBanner from '../components/HeroBanner';
import FixtureCard from '../components/FixtureCard';
import NewsCard from '../components/NewsCard';
import LeagueCard from '../components/LeagueCard';
import StandingTable from '../components/StandingTable';
import { fixtures, news, leagues, standings, favoriteTeams } from '../services/mockData';
import './Home.css';

function Home() {
  const [todayFixtures, setTodayFixtures] = useState([]);

  useEffect(() => {
    // Filter fixtures for today
    const today = new Date().toISOString().split('T')[0];
    setTodayFixtures(fixtures.filter(f => f.date === today || f.status !== 'completed'));
  }, []);

  return (
    <div className="home">
      {/* Hero Section */}
      <HeroBanner />

      {/* Today's Fixtures Section */}
      <section className="section section-fixtures">
        <div className="container">
          <h2 className="section-title">Today's Fixtures</h2>
          <div className="fixtures-scroll">
            {fixtures.slice(0, 5).map((fixture) => (
              <div key={fixture.id} className="fixture-item">
                <FixtureCard fixture={fixture} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Leagues Section */}
      <section className="section section-leagues">
        <div className="container">
          <h2 className="section-title">Top Leagues</h2>
          <div className="grid grid-3">
            {leagues.map((league) => (
              <LeagueCard key={league.id} league={league} />
            ))}
          </div>
        </div>
      </section>

      {/* League Standings Preview */}
      <section className="section section-standings">
        <div className="container">
          <h2 className="section-title">Premier League Standings</h2>
          <StandingTable standings={standings} league="Premier League" />
        </div>
      </section>

      {/* Trending Football News Section */}
      <section className="section section-news">
        <div className="container">
          <h2 className="section-title">Trending News</h2>
          <div className="grid grid-3">
            {news.map((newsItem) => (
              <NewsCard key={newsItem.id} news={newsItem} />
            ))}
          </div>
        </div>
      </section>

      {/* Favorite Teams Section */}
      <section className="section section-favorites">
        <div className="container">
          <h2 className="section-title">Your Favorite Teams</h2>
          <div className="favorites-grid">
            {favoriteTeams.map((team) => (
              <div key={team.id} className="favorite-team-card">
                <div className="favorite-header">
                  <span className="favorite-logo">{team.logo}</span>
                  <h3>{team.name}</h3>
                </div>
                <div className="favorite-fixture">
                  <p className="fixture-label">Next Match</p>
                  <div className="fixture-row">
                    <span className="vs-text">{team.nextFixture.type === 'home' ? 'vs' : '@'}</span>
                    <span className="opponent">{team.nextFixture.opponent}</span>
                  </div>
                  <span className="match-date">{team.nextFixture.date}</span>
                </div>
                <button className="btn btn-primary">View Details</button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
