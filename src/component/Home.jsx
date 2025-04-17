import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <div>
        <h1 className='intro'>Your Cricket Tracker</h1>
      </div>
      <div className="link-container">
        <Link to="/livematch" className="link">
          📺 View All Live Matches
        </Link>
      </div>
      <div className="link-container">
        <Link to="/score" className="link">
          🏏 View All Scores
        </Link>
      </div>
    </div>
  );
}

export default Home;
