import './StandingTable.css';

function StandingTable({ standings, league }) {
  return (
    <div className="standing-table-container">
      <table className="standing-table">
        <thead>
          <tr>
            <th>Pos</th>
            <th>Team</th>
            <th>P</th>
            <th>W</th>
            <th>D</th>
            <th>L</th>
            <th>GF</th>
            <th>GA</th>
            <th>GD</th>
            <th>Pts</th>
          </tr>
        </thead>
        <tbody>
          {standings.map((standing) => (
            <tr key={standing.position}>
              <td className="position">{standing.position}</td>
              <td className="team-cell">
                <span className="team-badge">{standing.badge}</span>
                <span className="team-name">{standing.team}</span>
              </td>
              <td>{standing.played}</td>
              <td className="positive">{standing.won}</td>
              <td>{standing.drawn}</td>
              <td className="negative">{standing.lost}</td>
              <td className="positive">{standing.goalsFor}</td>
              <td className="negative">{standing.goalsAgainst}</td>
              <td className={standing.goalDifference >= 0 ? 'positive' : 'negative'}>
                {standing.goalDifference > 0 ? '+' : ''}{standing.goalDifference}
              </td>
              <td className="points">{standing.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StandingTable;
