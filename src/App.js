import "./App.css";
import axios from "axios";
import Input from "./components/Input";
import { useEffect, useState } from "react";

function App() {

  const [degrees,setDegrees] = useState(null)
  const [location, setLocation]= useState(null)
  const [description, setDescription]= useState('')
  const [icon, setIcons]=useState('')
  const [humidity, setHumidity]= useState(null)
  const [wind, setWind]= useState(null)
  const [country, setCountry]= useState('')


const API_KEY = "007d648622a450444403f39866cd98c6";


const fetchData = async () =>{
  const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=accra&appid=${API_KEY}&units=metric`)
  const data = await res.data 

  setDegrees(data.main.temp)
  setLocation(data.name)
  setDescription(data.weather[0].description)
  setIcons(data.weather[0].icon)
  setHumidity(data.main.humidity)
  setWind(data.wind.speed)
  setCountry(data.sys.country)


  console.log(data)
}


useEffect(() => {
  fetchData()
}, [])

 
  return (
    <div className="App"> 
      <div className="weather">
        <Input />

        {/* The div for the weather */}
        <div className="weather_display">
          <h2 className="weather_location">weather in {location}</h2>

          {/* The div for the weather degrees */}
          <div className="weather_degrees"> 
            <h2>{degrees} °C </h2>
          </div>

          {/* The div for the weather icon */}
          <div className="weather_description">
            <div>
              <div className="weather_head">
                <span className="weather_icon">⛅</span>
                <p>{description} </p> 
              </div>
              <p>Humidity: {humidity}%</p>
                <p>Wind speed: {wind}m/s</p>
            </div>

            <div className="weather_dates">
              <p>{country}</p>
              <h4 className="weather_date">24/05/2024 12:45pm</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
