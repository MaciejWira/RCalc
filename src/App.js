import React from 'react';
import Header from './components/Header';
import Calculator from "./components/Calculator";

import './App.scss';

function App() {
  return (
    <div className="App">
      <Header title="Kalkulator biegowy"/>
      <Calculator />
    </div>
  );
}

export default App;
