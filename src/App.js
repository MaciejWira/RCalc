import React from 'react';
import Header from '@organisms/Header';
import Calculator from "@organisms/Calculator";

import '@styles/global.scss';
import Modal from '@organisms/Modal';

function App() {
  return (
    <div className="App">
      <Header />
      <Calculator />
      {/* <Modal /> */}
    </div>
  );
}

export default App;
