import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Site from './containers/Site/Site';

function App() {
  return (
    <div >
      <BrowserRouter>
        <Site />
      </BrowserRouter>
    </div>
  );
}

export default App;
