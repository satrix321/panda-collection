import React from 'react';
import './Header.scss';
import logo from '../../assets/images/logo.svg';
import cart from '../../assets/images/icons/shopping-cart.svg';
import Menu from '../Menu/Menu';
import classNames from 'classnames';

function Header({cartCounter, isMenuOpen, menuClickCallback}) {
  const onMenuClick = () => {
    if (menuClickCallback) {
      menuClickCallback();
    }
  }

  return (
    <header className="header">
      <a
        href="#menu"
        className={classNames(['header__menu-icon', { 'header__menu--is-open': isMenuOpen }])}
        onClick={onMenuClick}
      >
        <div></div>
      </a>
      <Menu isOpen={isMenuOpen} />
      <div className="header__logo">
        <img src={logo} alt="Logo" />
      </div>
      <a href="#cart" className="header__cart">
        <img src={cart} alt="Cart" />
        {cartCounter > 0 &&
          <div className="header__cart-counter">
            {cartCounter}
          </div>
        }
      </a>
    </header>
  );
}

export default Header;
