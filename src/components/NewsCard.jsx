import './NewsCard.css';

function NewsCard({ news }) {
  return (
    <div className="news-card">
      <div className="news-image">{news.image}</div>
      <div className="news-content">
        <div className="news-meta">
          <span className="news-category">{news.category}</span>
          <span className="news-date">{news.date}</span>
        </div>
        <h3 className="news-title">{news.title}</h3>
        <p className="news-excerpt">{news.excerpt}</p>
        <div className="news-footer">
          <span className="news-source">{news.source}</span>
          <span className="news-read-more">Read More →</span>
        </div>
      </div>
    </div>
  );
}

export default NewsCard;
