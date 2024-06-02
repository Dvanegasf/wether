import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';
import WeatherC from './components/WeatherC'
const Key = "c45a316dfd8757f5028145c86539b71f"

function App() {
  const [coords, setCoords] = useState()
  const [weather, setWeather] = useState()
  const [temp, setTemp] = useState()
  const [isloading, setIsLoading] = useState(true)

  const success = (pos) => {
    setCoords({
      lat: pos.coords.latitude,
      lon: pos.coords.longitude,
    });
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success);
  }, []);

  useEffect(() => {
    if(coords){
      const {lat, lon} = coords;
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${Key}`;
      axios.get(url)
        .then(res => {
          const kel = res.data.main.temp
          const cel = (kel - 273.15).toFixed(2)
          const fah = cel * 9/5 + 32
          setTemp({cel: cel, fah: fah})
          setWeather(res.data)
        })
        .catch(err => console.log(err))
        .finally(() => {
          setTimeout(() => {
            setIsLoading(false)
          }, 500);
        }) 
    }
  }, [coords])
  
  return (
  <div className='pg'>
    {
      isloading ?
        <figure className='pg__img'>
         <img src = "https://i.pinimg.com/originals/49/23/29/492329d446c422b0483677d0318ab4fa.gif" alt="Loading" />
       </figure>
     :
       <WeatherC
         weather = {weather}
          temp = {temp}
       />
    }
  </div>
    )
}

export default App
