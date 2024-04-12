import { useState } from "react";
import "./App.css";
import { useEffect } from "react";

function App() {
  const [location, setLocation] = useState("");
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${process.env.REACT_APP_API_KEY}`
        );
        const data = await response.json();
        setWeatherData(data);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    if (location) {
      fetchWeather();
    }
  }, [location]);
  const handleSearch = (e) => {
    e.preventDefault();
    setLocation(e.target.elements.location.value);
  };
  return (
    <>
      <h1>Weather Check</h1>
      <div>
        <form onSubmit={handleSearch}>
          <input type="text" name="location" />
          <button type="submit">Search</button>
        </form>
      </div>
      {weatherData && (
        <div>
          <h2>{weatherData.name}</h2>
          <p>{weatherData.weather[0].description}</p>
          <p>Temperature: {weatherData.main.temp}</p>
          <p>Humidity: {weatherData.main.humidity}</p>
          <p>Wind Speed: {weatherData.wind.speed}</p>
        </div>
      )}
    </>
  );
}

export default App;
