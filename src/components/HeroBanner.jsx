import './HeroBanner.css';

function HeroBanner() {
  return (
    <section className="hero-banner">
      <div className="hero-content">
        <h1 className="hero-title">Football Hub</h1>
        <p className="hero-subtitle">Live Fixtures, Global Football, One Destination</p>
        <div className="hero-featured">
          <div className="featured-match">
            <div className="featured-teams">
              <div className="featured-team">
                <span className="featured-badge">MC</span>
                <span className="featured-name">Manchester City</span>
              </div>
              <div className="featured-vs">VS</div>
              <div className="featured-team">
                <span className="featured-badge">LIV</span>
                <span className="featured-name">Liverpool</span>
              </div>
            </div>
            <div className="featured-info">
              <span className="featured-league">Premier League</span>
              <span className="featured-time">20:00 - Jun 22</span>
            </div>
            <button className="btn btn-primary">Get Tickets</button>
          </div>
        </div>
      </div>
      <div className="hero-background">
        <div className="hero-ball">⚽</div>
      </div>
    </section>
  );
}

export default HeroBanner;
