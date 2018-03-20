import axios from 'axios';

const API_KEY = 'caf56f5d0c461154fa1f2fc02995ad38';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  //This axios .get returns Promise object
  const request = axios.get(url);
  return  {
    type: FETCH_WEATHER,
    payload : request
  };
}