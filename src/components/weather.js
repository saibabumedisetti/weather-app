const Weather = ({ weather }) => (
    <div>
      <h2>{weather.location.city}</h2>
      <p>Temperature: {weather.condition.temp}°C</p>
      <p>Condition: {weather.condition.text}</p>
    </div>
  );

  export default Weather;