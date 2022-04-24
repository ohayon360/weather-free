import React, {useState, useEffect} from 'react';
import ReactDOM from "react-dom";
import './images/sun.png';






function SearchCity(){
    const [name, setName] = useState("");
    const [fUrl, setUrl] = useState("");
    const apiKey="bc28e8dda2d421f94e8597383b4e05c6"
 var cityInput=""
 const units="&units=metric"
 function Weather() {
  const [cityName, setCityName] = useState("");
  const [conditions, setConditions] = useState("");
  const [conditionsData, setConditionsData] = useState("");
  const [humidity, setHumidity] = useState("");
  const [temp, setTemp] = useState("");
  const [windSpeed, setWindSpeed] = useState("");
  const [iconWeather, setIcon] = useState("");
  const [iconUrl, setIconUrl] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(fUrl)
      const weatherData = await data.json();
     const cityName=weatherData.name
     setCityName((city) => cityName);
      const conditions=weatherData["weather"][0].main
      setConditions((con) => conditions);
      const conditionsData=weatherData["weather"][0].description
      setConditionsData((cond) => conditionsData);
      const humidity=weatherData["main"].humidity
      setHumidity((hum) => humidity);
      const temp=weatherData["main"].temp
      setTemp((t) =>Math.floor (temp));
      const windSpeed=weatherData["wind"].speed
      setWindSpeed((wind) => windSpeed);
      const iconWeather=weatherData["weather"][0].icon
      setIcon((iconApi) => iconWeather);
      const addresIcon="http://openweathermap.org/img/wn/"+iconWeather+"@2x.png"
      setIconUrl((urlIcon)=>addresIcon);
    }
  
    // call the function
    fetchData()
      // make sure to catch any error
      .catch(console.error);
  }, [])
  return <div className='weatherContainer'>
    <div className='current'>
    <p>current weather</p>
    <h3 className='city' >{cityName}</h3>
    <h3 className='con'>{conditionsData}</h3>
    </div>
    <div className='test'>
    <img src={iconUrl} alt='sun' className='img'/>
    <h3 className='temp'>{temp} <span>&#176;</span></h3>
    <div className='more'>
<h3> humidity {humidity}%</h3>
<h3> wind {windSpeed}  kph</h3>
    </div>
    </div>
  </div>;
}

 

     const handleSubmit = (event) => { 
         event.preventDefault();
         cityInput=name
        setUrl("https://api.openweathermap.org/data/2.5/weather?q="+cityInput+"&appid="+apiKey+units)
       }
       
       return (
       <div>
         <h1 className='headerTitle'>free weather</h1>
         <form onSubmit={handleSubmit}>
      
        <input 
          type="text" 
          placeholder='search city'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
    </form>
        <Weather/>
     </div>
         
       )
       }
       
 export {SearchCity};      
