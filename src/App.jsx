import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Fixtures from './pages/Fixtures';
import Leagues from './pages/Leagues';
import News from './pages/News';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <div className="app-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/fixtures" element={<Fixtures />} />
            <Route path="/leagues" element={<Leagues />} />
            <Route path="/news" element={<News />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
