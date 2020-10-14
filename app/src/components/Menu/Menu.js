import React from 'react';
import './Menu.scss';
import classNames from 'classnames';

function Menu({isOpen}) {
  return (
    <nav className={classNames(['menu', { 'menu--is-open': isOpen }])}>
      <a href="https://www.google.com" className="menu__item">Home</a>
      <a href="https://www.google.com" className="menu__item">Products</a>
      <a href="https://www.google.com" className="menu__item">My Account</a>
      <a href="https://www.google.com" className="menu__item">Customer Service</a>
    </nav>
  );
}

export default Menu;
