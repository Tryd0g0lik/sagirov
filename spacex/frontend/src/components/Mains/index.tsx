import React from 'react';
import './style.css';

export function MainFC (): React.JSX.Element {
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
          <div className="main_statically_market">
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
          </div>

        </div>
      </section>
    </main>
  );
}
