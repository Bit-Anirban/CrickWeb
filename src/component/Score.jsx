import React from "react"; // ❗ Also fix import, should be "React", not "react"
import { Link } from "react-router-dom";
function Score({ data }) {
  const date = new Date();
  const date_tod = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  console.log(data);
  if (!data || !data.data) {
    return <p>Loading...</p>;
  }

  const liveMatches = data.data.filter(
    (match) =>
      match.status !== "Match not started" &&
      match.status !== "Match cancelled" &&
      match.ms === "live"
  );

  return (
    <div className="score-container">
      <div className="home-tab">
        <Link to="/">🏠 Home</Link>
      </div>
      <h1>Live Matches & Scores - {date_tod}</h1>
      <ul>
        {liveMatches.map((match, index) => (
          <li key={index}>
            <h1>{match.series}</h1>
            <h2>{match.t1} vs {match.t2}</h2>
            <h4>{match.t1} : {match.t1s}</h4>
            <h4>{match.t2} : {match.t2s}</h4>
            <h2>{match.status}</h2>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Score;
