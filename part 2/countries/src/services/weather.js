import axios from 'axios';
import {API_KEY} from "../utils/constants";

const baseUrl = "https://api.openweathermap.org/data/2.5/weather";

const getWeatherConditions = (lat, long) => {
    const request = axios.get(`${baseUrl}?lat=${lat}&lon=${long}&units=metric&appid=${API_KEY}`);
    return request.then(response => response.data);
}

export default {
    getWeatherConditions
}