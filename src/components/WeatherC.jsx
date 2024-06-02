import React, { useState } from 'react'
import "./styles/WeatherC.css"
 
const WeatherC = ({weather, temp}) => {
        const [iscel, setIscel] = useState(true)
        const handleTemp = () => {
            setIscel(!iscel)
        }
  return (
    <div className='weatherC'>
        <h1 className='weatherC__titulo'>Weather app</h1>
        <h2 className='weatherC__ciudad'>{weather?.name}, {weather?.sys.country}</h2>
        <section className='weatherC__body'>
            <figure className='weatherC__img'>
                <img src={`https://openweathermap.org/img/wn/${weather?.weather[0].icon}@4x.png`} alt="Clima" />
            </figure>
            <article className='weatherC__info'>
                <h3 className='weatherC__desc'>"{weather?.weather[0].description}"</h3>
                <ul className='weatherC__lista'>
                    <li className='weatherC__item'><span>Wind speed</span> <span>{weather?.wind.speed}m/s</span></li>
                    <li className='weatherC__item'><span>Clouds</span> <span>{weather?.clouds.all}%</span></li>
                    <li className='weatherC__item'><span>Pressure</span> <span>{weather?.main.pressure}hPa</span></li>
                </ul>
            </article>
        </section>
        <h2 className="weatherC__temp">{
            iscel ? 
                temp?.cel + " " + "ºC" 
                : 
                temp?.fah + " " + "ºF"}
        </h2>
        <button className='weatherC__btn' onClick={handleTemp}>Change to {iscel ? "ºF" : "ºC"}</button>
    </div>
  )
}

export default WeatherC