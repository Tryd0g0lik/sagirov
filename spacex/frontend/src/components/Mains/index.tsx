import React, { useEffect, useState } from 'react';

export function MainFC(): React.JSX.Element {
  const [menuItems, setMenuItems] = useState([]);
  async function getMenuApi(): Promise<object[] | boolean> {
    const response = await fetch('http://127.0.0.1:8000/api/v1/statistic/', {
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
    async function publicationsStatistic(): Promise<undefined> {
      const respons = await getMenuApi();
      if ((typeof respons).includes('boolean')) {
        return undefined;
      }
      setMenuItems(respons as object[]);
    }
    publicationsStatistic();
  }, []);
  return (
    <main>
      <section className="main">
        <div className="main__button">
          <div className="main__button_h1">
            <hgroup className="h1">
              <h1>Путешествие</h1>
              <p>на красную планету</p>
            </hgroup>
          </div>
          <div className="main__button_push">
            <div className="buttom">
              Начать путешествие
            </div>
          </div>
        </div>
        <div className="main__middle"></div>
        <div className="main_statically">
          {menuItems.map((item, index) => (
            <div className="main_statically_market" key={index}>
              <span>{item['first']}</span>
              <span>{item['number']}</span>
              <span>{item['second']}</span>
            </div>
          ))}
          {/* <div className="main_statically_market">
            <span>мы</span>
            <span>1</span>
            <span>на рынке</span>
          </div>
          <div className="main_statically_ensure">
            <span>гарантируем</span>
            <span>50%</span>
            <span>безопасность</span>
          </div>
          <div className="main_statically_present">
            <span>календарик за</span>
            <span>2001</span>
            <span>в подарок</span>
          </div>
          <div className="main_statically_relax">
            <span>путешествие</span>
            <span>597</span>
            <span>дней</span>
          </div> */}

        </div>
      </section>
    </main>
  );
}
