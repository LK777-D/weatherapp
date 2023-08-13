import "./HourlyWeather.css";
/* eslint-disable react/prop-types */

const HourlyWeather = (props) => {
  return (
    <div className="hourly">
      {props.hourlyWeather.list &&
        props.hourlyWeather.list.slice(0, 12).map((weather) => {
          const unixTimestamp = weather.dt;
          const date = new Date(unixTimestamp * 1000);
          const hour = date.getHours();

          return (
            <div key={weather.dt_txt} className="singleforecast">
              <span>{hour}:00</span>
              <span>{weather.main.temp.toFixed()}°C</span>
              <span>{weather.weather[0].main}</span>
            </div>
          );
        })}
    </div>
  );
};

export default HourlyWeather;
