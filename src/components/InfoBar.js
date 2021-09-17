import React from 'react';
import style from'./InfoBar.module.css';

export default function InfoBar (props) {
  const { humidity, pressure, wind, wind_dir } = props.weather;
  const compassPoints = ["северный", "северо-восточный", "восточный", "юго-восточный", "южный", "юго-западный",
                          "западный", "северо-западный"];
  let rawPosition = Math.floor((wind_dir / 22.5) + 0.5);
  let arrayPosition = (rawPosition % 8);

  return (
    <div>
    <section className={style.info}>
        <div className={style.info__block}>
          <p>Ветер</p>
          <span>{Math.round(wind)} м/с, {compassPoints[arrayPosition]}</span>
        </div>
        <div className={style.info__block}>
          <p>Давление</p>
          <span>{pressure} мм рт. ст.</span>
        </div>
        <div className={style.info__block}>
          <p>Влажность</p>
          <span>{humidity}%</span>
        </div>
        <div className={style.info__block}>
          <p>Вероятность дождя</p>
          <span>10%</span>
        </div>
      </section>
    </div>
  )
}

