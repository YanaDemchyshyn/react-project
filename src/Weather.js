import React,{useState} from "react";
import axios from 'axios';

export default function Weather(props){
  let [temperature, setTemperature]=useState("");
  function showTemperature(response) {
    setTemperature(response.data.main.temp);
  }
  
  let key = "5f472b7acba333cd8a035ea85a0d4d4c";
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${key}&units=${units}`;
  axios.get(apiUrl).then(showTemperature);
  return(<h2>The weather in {props.city} is {Math.round(temperature)}° C</h2>)
}