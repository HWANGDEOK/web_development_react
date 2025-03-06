import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [weather, setWeather] = useState({
    temp: '',
    desc: '',
    icon: '',
  });

  useEffect(() => {
    let city = 'London'
    fetch('https://api.openweathermap.org/data/2.5/weather?q=London&units=Metric&APIkey=c17af022d6c5e23743e0c481f4b758ba')
    .then(response => response.json())
    .then(result => {
      setWeather({
        temp: result.main.temp,
        desc: result.weather[0].description,
        icon: result.weather[0].icon,
      });
    })
    .catch(err => console.log(err))
  }, []);

  if(weather.icon){
    return (
      <>
        <p>온도 : {weather.temp} 도</p>
        <p>설명 : {weather.desc}</p>
        <img src={`http://openweathermap.org/img/wn/${weather.icon}@2x.png`} alt="날씨 아이콘"/>
      </>
    );
  }
  else {
    return <div>로딩 중...</div>
  }

}

export default App
