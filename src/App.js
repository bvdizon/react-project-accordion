import React from 'react';
import Accordion from './components/Accordion';
import data from './components/data';
import './App.css';

const App = () => {
  return (
    <div class='container'>
      <h1>Frequently Ask Questions</h1>
      {data.map((question) => (
        <Accordion key={question.id} {...question} />
      ))}
    </div>
  );
};

export default App;
