import React from "react";
import { useNavigate } from "react-router-dom";
import './Home.css';
import { Link } from "react-router-dom";
function Livematch({ curr }) {
  const navigate = useNavigate();
  const handler = (id) =>{
    navigate(`/match/${id}`);
  }
  return (
    <div className="livematch-container">
      <div className="home-tab">
        <Link to="/">🏠 Home</Link>
      </div>
      <h1>All Matches</h1>
      {!curr ? (
        <p>Loading...</p>
      ) : (
        <ol>
          {curr.data.map((match, index) => (
            <li key={index} className="lister">
              <h1>{match.series}</h1>
              <h2>
                {match.teams[0]} vs {match.teams[1]}

              </h2>
              <h3>{match.status}</h3>
              <button onClick={()=>handler(match.id)}>More</button>
            </li>
          ))}
        </ol>
      )}
    </div>
  );
}

export default Livematch;
