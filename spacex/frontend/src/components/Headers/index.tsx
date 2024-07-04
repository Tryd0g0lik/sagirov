import React, { useEffect, useState } from 'react';

export function HeaderFC (): React.JSX.Element {
  const [menuItems, setMenuItems] = useState([]);
  async function getMenuApi (): Promise<object[] | boolean> {
    const response = await fetch('http://127.0.0.1:8000/api/v1/menu/', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    if (response.ok) {
      // debugger
      const data = await response.json();
      return data as object[];
    }
    return false;
  }
  useEffect(() => {
    async function publicationsManu(): Promise<undefined> {
      const respons = await getMenuApi();
      if ((typeof respons).includes('boolean')) {
        return undefined;
      }
      setMenuItems(respons as object[]);
    }
    publicationsManu();
  }, []);
  return (
    <header>
      <div className="header" >
        <div className="header__logo">
          <div className="header__logo_img">
            {/* < !--logo --> */}
          </div>
        </div>
        <div className="header__middle"></div>
        <div className="header__menu">
          <menu>
            <ul className="menu">
              {menuItems.map((item, index) => (
                <li className="menu__item" key={index}>
                  <a href={item['link']} className="menu__link">
                    {item['title']}
                  </a>
                </li>
              ))}
            </ul>
          </menu>
        </div>
      </div>
    </header>
  );
}
