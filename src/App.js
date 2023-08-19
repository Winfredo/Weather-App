import "./App.css";
import axios from "axios";
import Input from "./components/Input";
import { useEffect, useState } from "react";
import { async } from "q";

function App() {

  const [degrees,setDegrees] = useState(null)
  const [location, setLocation]= useState('')
  const [userLocation, setuserLocation] = useState('')
  const [description, setDescription]= useState('')
  const [icon, setIcons]=useState('')
  const [humidity, setHumidity]= useState(null)
  const [wind, setWind]= useState(null)
  const [country, setCountry]= useState('')
  const [dataFetched,setDataFetched]= useState(false)


const fetchData = async (e) =>{
e.preventDefault()

try{
  const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${userLocation}&appid=${process.env.REACT_APP_API_KEY}&units=metric`)
  const data = await res.data 

  setDegrees(data.main.temp)
  setLocation(data.name)
  setDescription(data.weather[0].description)
  setIcons(data.weather[0].icon)
  setHumidity(data.main.humidity)
  setWind(data.wind.speed)
  setCountry(data.sys.country)
  setDataFetched(true)
}catch(err){
console.log(err)
alert("Please enter a valid Location")
}

}

const defaultDataFetched = async () =>{
if (!dataFetched){
  const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=accra&appid=${process.env.REACT_APP_API_KEY}&units=metric`)
  const data = await res.data 

  setDegrees(data.main.temp)
  setLocation(data.name)
  setDescription(data.weather[0].description)
  setIcons(data.weather[0].icon)
  setHumidity(data.main.humidity)
  setWind(data.wind.speed)
  setCountry(data.sys.country)
  setDataFetched(true)
}
}


useEffect(() => {
  defaultDataFetched()
}, []) 

 
  return (
    <div className="App"> 
      <div className="weather">

        <Input
        text={(e) => setuserLocation(e.target.value)}
        submit={fetchData}
        func={fetchData}
        />

        {/* The div for the weather */}
        <div className="weather_display">
          <h2 className="weather_location">weather in {location}</h2>

          {/* The div for the weather degrees */}
          <div className="weather_degrees"> 
            <h2>{degrees}°C </h2>
          </div>

          {/* The div for the weather icon */}
          <div className="weather_description">
            <div>
              <div className="weather_head">
                <span className="weather_icon">
              <img src={`http://openweathermap.org/img/w/${icon}.png`} />
                </span>
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
