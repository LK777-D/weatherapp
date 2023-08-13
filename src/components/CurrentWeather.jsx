import "./CurrentWeather.css";
/* eslint-disable react/prop-types */

const CurrentWeather = (props) => {
  // console.log(props.currentWeather.name);
  return (
    <div className="current">
      <div className="topinfo">
        <h1>{props.currentWeather.name}</h1>
        <h1>
          {props.currentWeather.main &&
            props.currentWeather.main.temp.toFixed()}
          °C
        </h1>
      </div>
      <div className="midinfo">
        <span>
          {props.currentWeather.weather && props.currentWeather.weather[0].main}
        </span>
        <span>
          {props.currentWeather.weather &&
            props.currentWeather.weather[0].description}
        </span>
      </div>
      <div className="bottominfo">
        <div className="minmax">
          <span>
            L :{" "}
            {props.currentWeather.main &&
              props.currentWeather.main.temp_min.toFixed()}
            °C
          </span>
          <span>
            H :{" "}
            {props.currentWeather.main &&
              props.currentWeather.main.temp_max.toFixed()}
            °C
          </span>
        </div>
        <div className="pressure">
          <span>
            Pressure :{" "}
            {props.currentWeather.main && props.currentWeather.main.pressure}
          </span>
          <span>
            Feels Like :{" "}
            {props.currentWeather.main &&
              props.currentWeather.main.feels_like.toFixed()}
            °C
          </span>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
