import './FixtureCard.css';

function FixtureCard({ fixture }) {
  const getStatusClass = (status) => {
    switch (status) {
      case 'live':
        return 'status-live';
      case 'completed':
        return 'status-completed';
      default:
        return 'status-upcoming';
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'live':
        return '🔴 LIVE';
      case 'completed':
        return 'FINAL';
      default:
        return 'UPCOMING';
    }
  };

  return (
    <div className={`fixture-card ${getStatusClass(fixture.status)}`}>
      <div className="fixture-header">
        <span className={`fixture-status ${getStatusClass(fixture.status)}`}>
          {getStatusText(fixture.status)}
        </span>
        <span className="fixture-league">{fixture.league}</span>
      </div>

      <div className="fixture-body">
        <div className="team home-team">
          <div className="team-badge">{fixture.homeTeamBadge}</div>
          <span className="team-name">{fixture.homeTeam}</span>
        </div>

        <div className="fixture-score">
          {fixture.status !== 'upcoming' ? (
            <>
              <span className="score-value">{fixture.homeScore}</span>
              <span className="score-separator">-</span>
              <span className="score-value">{fixture.awayScore}</span>
            </>
          ) : (
            <>
              <span className="time-value">{fixture.time}</span>
            </>
          )}
        </div>

        <div className="team away-team">
          <span className="team-name">{fixture.awayTeam}</span>
          <div className="team-badge">{fixture.awayTeamBadge}</div>
        </div>
      </div>

      <div className="fixture-footer">
        <span className="fixture-date">{new Date(fixture.date).toLocaleDateString()}</span>
      </div>
    </div>
  );
}

export default FixtureCard;
