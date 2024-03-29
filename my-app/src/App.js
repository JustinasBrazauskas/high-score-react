import React from 'react';
import './App.css';
import allCountryScores from './Scores';
import ScoresTable from './ScoresTable'



function App() {
  const SortedCountries = allCountryScores.sort((a, b) => {
    return a.name < b.name ? -1 : 1;
  });

  return(
  
    <div className="App">
      <h1>High Scores</h1>
      {SortedCountries.map((CountryName, index) => {
        return <ScoresTable key = {index} value = {CountryName}/>;

      })}
  
    </div>
  );
}

export default App;
