import "./App.css";
import { useState, useEffect } from "react";
import Input from "./components/input";
import CurrentWeather from "./components/CurrentWeather";
import HourlyWeather from "./components/HourlyWeather";

function App() {
  const [currentWeather, setCurrentWeather] = useState({});
  const [hourlyWeather, setHourlyWeather] = useState({});
  const [search, setSearch] = useState("Boston");
  const [weatherCond, setWeatherCond] = useState("");
  const fetchCurrentWeather = async () => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=5b300ad4dd8c080c6b384d27a5e089e3&units=metric`;

    const response = await fetch(url);
    const currentData = await response.json();
    if (currentData) {
      setCurrentWeather(currentData);
    }
    if (currentData.weather) {
      setWeatherCond(currentData.weather[0].main);
    }
  };

  const fetchHourlyWeather = async () => {
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${search}&appid=5b300ad4dd8c080c6b384d27a5e089e3&units=metric`;
    const response = await fetch(url);
    const hourlyData = await response.json();
    if (hourlyData) {
      setHourlyWeather(hourlyData);
    }
  };
  const searchHandler = () => {
    if (search.trim() !== "") {
      fetchCurrentWeather();
      fetchHourlyWeather();
    }
  };
  useEffect(() => {
    fetchCurrentWeather();
    fetchHourlyWeather();
  }, []);

  return (
    <div className={`app ${weatherCond.toLowerCase()}`}>
      <Input
        search={search}
        setSearch={setSearch}
        searchHandler={searchHandler}
      />
      <CurrentWeather currentWeather={currentWeather} />
      <HourlyWeather hourlyWeather={hourlyWeather} />
    </div>
  );
}

export default App;
