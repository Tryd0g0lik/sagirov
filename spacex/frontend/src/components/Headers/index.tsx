import React, { useState } from 'react';

export function HeaderFC(posts: object[]): React.JSX.Element {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    const rootElement = document.getElementById('root') as HTMLElement;
    const menuItemsData = rootElement.getAttribute('data-menu-items');
    setMenuItems(JSON.parse(menuItemsData as string));
  }, []);
  return (
    <header>
      <div className="header" data-menu-items="{{ menu_items }}">
        <div className="header__logo">
          <div className="header__logo_img">
            {/* < !--logo --> */}
          </div>
        </div>
        <div className="header__middle"></div>
        <div className="header__menu">
          <menu>
            <ul className="menu">
              {
                Array.from(menuItems).map((item, index) => (
                  <li className="menu__item" key={index}>
                    <a href={item.pathname} className="menu__link">{ item.title}</a>
                  </li>
                ))
              }
              {/* <li className="menu__item">
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
              </li> */
              }
            </ul>
          </menu>
        </div>
      </div>
    </header>
  );
}
