import React from 'react';

import './Header.scss';

const Header = ({ title }) => {

  return(
    <header className="Header">
      <div className="container">
        <h1 className="Header__logo">{title}</h1>
      </div>
    </header>
  )

};

export default Header;
