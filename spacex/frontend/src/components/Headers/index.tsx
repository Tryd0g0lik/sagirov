import React from 'react';
import './style.css';

export function HeaderFC():React.JSX.Element {
  return (
    <header>
      <div className="header">
        <div className="header__logo">
          <div className="header__logo_img">
            {/* < !--logo --> */}
          </div>
        </div>
        <div className="header__middle"></div>
        <div className="header__menu">
          <menu>
            <ul className="menu">
              <li className="menu__item">
                <a href="/" className="menu__link">Главная</a>
              </li>
              <li className="menu__item">
                <a className="menu__link">Технология</a>
              </li>
              <li className="menu__item">
                <a className="menu__link">График полетов</a>
              </li>
              <li className="menu__item">
                <a className="menu__link">Гарантии</a>
              </li>
              <li className="menu__item">
                <a className="menu__link">О компании</a>
              </li>
              <li className="menu__item">
                <a className="menu__link">Контакты</a>
              </li>
            </ul>
          </menu>
        </div>
      </div>
    </header>
  )
}
