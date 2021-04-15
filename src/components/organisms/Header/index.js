import React from 'react';
import { useSelector } from 'react-redux';
import { header } from '@translations';
const { heading } = header;

const Header = () => {

  const lang = useSelector(state => state.lang);

  return(
    <header className="Header">
      <div className="container">
        <h1 className="Header__logo">
          {heading[lang]}
        </h1>
      </div>
    </header>
  )

};

export default Header;
