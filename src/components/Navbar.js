import React from 'react';
import style from'./Navbar.module.css';


export default function Navbar (props) {
  const { temperature, location } = props.weather;

  return (
    <div className={style.menu_wrap}>
      <nav className={style.menu}>
        <form className={style.form} onSubmit={(e) => props.changeWeather(e)}>
          <label className={style.visually__hidden}>Название города</label>
          <input className={style.form__input} placeholder={location || ''} onChange={(e) => props.changeRegion(e.target.value)} />

          <button className={style.form__OKbtn}>OK</button>
          <div className={style.form__changes}>
            <p>Сменить город</p>
            <p className={style.form__location}>
              {/* <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M22.489 5.83819L5.23895 16.6268L13.728 18.2769L18.2146 25.7637L22.489 5.83819Z" fill="white" fill-opacity="0.4"/>
              </svg> */}
              Мое местоположение</p>
          </div>
        </form>

        <div className={style.switch}>
          <span><sup>o</sup></span>
          <div className={style.switch__wrap}>
            <button className={style.switch__Cbtn + ' ' + style.active} onClick={() => props.changeUnits('metric', temperature)}>C</button>
            <button className={style.switch__Fbtn} onClick={() => props.changeUnits('imperial', temperature)}>F</button>
          </div>
        </div>
      </nav>
    </div>
  )
}

