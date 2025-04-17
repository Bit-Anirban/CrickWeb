import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Score from './component/Score';
import Livematch from './component/Livematch';
import MatchPage from './component/MatchPage';
import { Route, Routes } from 'react-router-dom';
import Home from './component/Home';
import './App.css';


function App() {
  const [data, setData] = useState(null);
  const [curr, setCurr] = useState(null);

  useEffect(() => {
    axios
      .get('https://api.cricapi.com/v1/cricScore?apikey=4fb79e00-4856-46b5-ad3e-f6968c9b780e')
      .then((response) => setData(response.data))
      .catch((error) => console.error('Error fetching data:', error));
    axios
      .get('https://api.cricapi.com/v1/currentMatches?apikey=4fb79e00-4856-46b5-ad3e-f6968c9b780e&offset=0')
      .then((response) => setCurr(response.data))
      .catch((error) => console.error('Error fetching data:', error));

  }, []);

  return (
    <>
    
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/livematch" element={<Livematch curr = {curr}/>} />
      <Route path="/match/:matchId" element={<MatchPage curr = {curr} />} />
      <Route path="/score" element={<Score data = {data}/>} />
    </Routes>
    </>
  );
}

export default App; 