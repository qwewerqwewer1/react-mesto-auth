import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';

import burgerOpenImg from '../images/burger.svg';
import burgerCloseImg from '../images/close_burger.svg';

function Header({ email, isLogged, onLogout }) {
  const [menuOpened, setMenuOpened] = React.useState(false);

  const handleMenuClick = function (e) {
    setMenuOpened(!menuOpened);
  }

  const headerNav = menuOpened ? 'header__nav header__nav_active' : 'header__nav';
  const menu = menuOpened ? 'menu menu_active' : 'menu';
  const menuItem = menuOpened ? 'menu__item menu__item_active' : 'menu__item';
  const headerLogo = menuOpened ? 'header__logo header__logo_active' : 'header__logo';
  const burgerOpen = menuOpened ? 'header__burger' : 'header__burger header__burger_active';
  const burgerClose = menuOpened ? 'header__burger header__burger_active' : 'header__burger';

  const handleLogoutClick = function () {
    setMenuOpened(false);
    onLogout();
  }

  return (
    <header className="header">
      <div className={headerLogo}></div>
      <nav className={isLogged ? headerNav : ''}>
        <ul className={menu}>
          <Switch>
            <Route path="/signup">
              <li className="menu__item"><Link className="menu__link" to="signin">Войти</Link></li>
            </Route>
            <Route path="/signin">
              <li className="menu__item"><Link className="menu__link" to="signup">Регистрация</Link></li>
            </Route>
            {isLogged ? <><li className={menuItem}>{email}</li><li className={menuItem}><span className="menu__link" onClick={handleLogoutClick}>Выйти</span></li></> : ''}
          </Switch>
        </ul>
      </nav>
      <Route path="/cards">
        <button className={burgerOpen} onClick={handleMenuClick}><img src={burgerOpenImg} alt="Бургер" /></button>
        <button className={burgerClose} onClick={handleMenuClick}><img src={burgerCloseImg} alt="Бургер" /></button>
      </Route>
    </header>
  );
}

export default Header