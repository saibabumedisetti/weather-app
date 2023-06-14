import React, { useState, useEffect } from 'react';

import Weather from './weather'
import Loading from './loading'

const API_KEY = 'YAHOO_API_KEY';

const WeatherDisplay = ({ city }) => {
    const [loading, setLoading] = useState(true);
    const [weather, setWeather] = useState(null);
  
    useEffect(() => {
      const fetchWeather = async () => {
        try {
          const response = await fetch(
            `https://weather-ydn-yql.media.yahoo.com/forecastrss?location=${city}&format=json`,
            {
              headers: {
                Authorization: `Bearer ${API_KEY}`,
              },
            }
          );
          const data = await response.json();
          setWeather(data);
          setLoading(false);
        } catch (error) {
          console.error('Error fetching weather:', error);
        }
      };
  
      fetchWeather();
    }, [city]);
  
    return (
      <div>
        <h1>Weather Display</h1>
        {loading ? <Loading /> : weather && <Weather weather={weather} />}
      </div>
    );
  };

  export default WeatherDisplay;