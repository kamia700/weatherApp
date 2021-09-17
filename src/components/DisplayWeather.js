import React from 'react';
import style from'./DisplayWeather.module.css';

export default function DisplayWeather (props) {
  const { temperature, description, img } = props.weather;
  let iconurl = "http://openweathermap.org/img/wn/" + img + "@2x.png";

  return (
    <div>
      <section className={style.weather}>
        <div className={style.weather__temp}>
          <div className={style.weather__title}>
            <img className="mainImg" src={iconurl} alt="weather-img" />
            <span>{Math.round(temperature)}<sup>o</sup></span>
          </div>
          <p>{description}</p> 
        </div>
      </section>
    </div>
  )
}