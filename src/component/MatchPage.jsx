import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function MatchPage({ curr }) {
  const { matchId } = useParams();

  if (!curr || !curr.data) {
    return <p>Loading...</p>;
  }

  const match = curr.data.find((m) => m.id == matchId);

  if (!match) {
    return <p>No match found with ID: {matchId}</p>;
  }

  return (
    <div className="match-page-container">
      <div className="home-tab">
        <Link to="/">🏠 Home</Link>
      </div>
      <h1>{match.name}</h1>
      <h3>{match.teams[0]} : {match.score[0].r} / {match.score[0].w} - {match.score[0].o}</h3>
      <h3>{match.teams[1]} : {match.score[1].r} / {match.score[1].w} - {match.score[1].o}</h3>
      <p>Status: <span className="highlight">{match.status}</span></p>
      <p>Location: <span className="highlight">{match.venue}</span></p>
    </div>
  );
}

export default MatchPage;
