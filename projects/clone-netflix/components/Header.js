import React from 'react';
import './Header.css';

function Header ({ black }) {
  return (
    <header className={ black ? 'black' : '' }>
      <div className="header--logo">
        <a href="/">
        <img src="https://logodownload.org/wp-content/uploads/2014/10/netflix-logo-5.png" alt="Netflix"/>
        </a>
      </div>
      <div className="header--user">
        <img src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png" alt="Usuário"/>
      </div>
    </header>
  );
}

export default Header;
