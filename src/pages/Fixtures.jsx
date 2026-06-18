import { useState } from 'react';
import FixtureCard from '../components/FixtureCard';
import { fixtures } from '../services/mockData';
import './Fixtures.css';

function Fixtures() {
  const [selectedLeague, setSelectedLeague] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');

  const leagues = ['all', 'Premier League', 'La Liga', 'Bundesliga', 'Serie A', 'Ligue 1'];
  const statuses = ['all', 'upcoming', 'live', 'completed'];

  const filteredFixtures = fixtures.filter((fixture) => {
    const leagueMatch = selectedLeague === 'all' || fixture.league === selectedLeague;
    const statusMatch = selectedStatus === 'all' || fixture.status === selectedStatus;
    return leagueMatch && statusMatch;
  });

  return (
    <div className="fixtures-page">
      <div className="container">
        <div className="fixtures-header">
          <h1>Fixtures</h1>
          <p>Browse all upcoming, live, and past matches</p>
        </div>

        <div className="fixtures-filters">
          <div className="filter-group">
            <label>League:</label>
            <select value={selectedLeague} onChange={(e) => setSelectedLeague(e.target.value)}>
              {leagues.map((league) => (
                <option key={league} value={league}>
                  {league.charAt(0).toUpperCase() + league.slice(1)}
                </option>
              ))}
            </select>
          </div>

          <div className="filter-group">
            <label>Status:</label>
            <select value={selectedStatus} onChange={(e) => setSelectedStatus(e.target.value)}>
              {statuses.map((status) => (
                <option key={status} value={status}>
                  {status.charAt(0).toUpperCase() + status.slice(1)}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="fixtures-list">
          {filteredFixtures.length > 0 ? (
            <div className="grid grid-2">
              {filteredFixtures.map((fixture) => (
                <FixtureCard key={fixture.id} fixture={fixture} />
              ))}
            </div>
          ) : (
            <div className="no-results">
              <p>No matches found for the selected filters.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Fixtures;
