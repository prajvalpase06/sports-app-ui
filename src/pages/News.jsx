import { useState } from 'react';
import NewsCard from '../components/NewsCard';
import { news } from '../services/mockData';
import './News.css';

function News() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = ['all', ...new Set(news.map((item) => item.category))];

  const filteredNews = news.filter(
    (item) => selectedCategory === 'all' || item.category === selectedCategory
  );

  return (
    <div className="news-page">
      <div className="container">
        <div className="news-header">
          <h1>Football News</h1>
          <p>Stay updated with the latest in world football</p>
        </div>

        <div className="category-filter">
          {categories.map((category) => (
            <button
              key={category}
              className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        <div className="news-grid">
          {filteredNews.length > 0 ? (
            <div className="grid grid-3">
              {filteredNews.map((newsItem) => (
                <NewsCard key={newsItem.id} news={newsItem} />
              ))}
            </div>
          ) : (
            <div className="no-news">
              <p>No news found for this category.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default News;
