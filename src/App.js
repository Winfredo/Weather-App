import "./App.css";
import Input from "./components/Input";

function App() {
  const API_key = ""


  return (
    <div className="App">
      <div className="weather">
        <Input />

        {/* The div for the weather */}
        <div className="weather_display">
          <h2 className="weather_location">weather in ghana</h2>

          {/* The div for the weather degrees */}
          <div className="weather_degrees">
            <h2>12.43 deg</h2>
          </div>

          {/* The div for the weather icon */}
          <div className="weather_description">
            <div>
              <div className="weather_head">
                <span className="weather_icon">⛅</span>
                <p>Partly Cloudy</p> 
              </div>
              <p>Humidity:84%</p>
                <p>Wind speed: 5.66m/s</p>
            </div>

            <div className="weather_dates">
              <p>JP</p>
              <h4 className="weather_date">24/05/2024 12:45pm</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
