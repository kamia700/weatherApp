import React from 'react';
import style from'./Navbar.module.css';

export default function Navbar (props) {
  const { temperature, location } = props.weather;
  return (
    <div className={style.menu__wrap}>
      <nav className={style.menu}>
        <form className={style.form} onSubmit={(e) => {props.changeWeather(e)}}>
          <label className={style.visually__hidden}>Название города</label>
          <input className={style.form__input} placeholder={location || ''} onChange={(e) => props.changeRegion(e.target.value)} autoComplete="on" />
          <button type="submit" className={style.form__OKbtn} >OK</button>
          <div className={style.form__changes}>
            <p>Сменить город</p>
            <p className={style.form__location}>
              Мое местоположение</p>
          </div>
        </form>

        <div className={style.switch}>
          <span><sup>o</sup></span>
          <div className={style.switch__wrap}>
            <button id='Cbtn' className={style.switch__Cbtn  + ' active'} onClick={(e) => { props.handleClick(e.target.id); props.changeUnits('metric', temperature)} }>C</button>
            <button id='Fbtn' className={style.switch__Fbtn } onClick={(e) => { props.handleClick(e.target.id); props.changeUnits('imperial', temperature)} }>F</button> 
          </div>
        </div>
      </nav>
    </div>
  )
}

