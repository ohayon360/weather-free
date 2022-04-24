import React, {useState, useEffect} from 'react';
import ReactDOM from "react-dom";

function Weather() {
    useEffect(() => {
      const fetchData = async () => {
        const data = await fetch()
        const weatherData = await data.json();
        const cityName=weatherData.name
        const conditions=weatherData["weather"][0].main
        const conditionsData=weatherData["weather"][0].description
        const humidity=weatherData["main"].humidity
        const temp=weatherData["main"].temp
        const windSpeed=weatherData["wind"].speed
        console.log(cityName)
        console.log(conditions)
        console.log(conditionsData)
        console.log(windSpeed)
  
      }
    
      // call the function
      fetchData()
        // make sure to catch any error
        .catch(console.error);
    }, [])
    return <h1>hello</h1>;
  }
  
 export {Weather};