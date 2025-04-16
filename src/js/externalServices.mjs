const apiKey = import.meta.env.VITE_API
const weatherKey = import.meta.env.VITE_WEATHER_API
const openWeather = import.meta.env.VITE_OPENWEATHER_API


export default class ExternalServices {
    constructor () {
        
    }
    
    async getAllParks() {
        const baseUrl = 'https://developer.nps.gov/api/v1/parks';
        const response = await fetch(`${baseUrl}?api_key=${apiKey}`);
        const data = await response.json();  // turn the response into JSON
        return data.data; 
    }

    async getWeather(lat, lon) {
        const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${openWeather}&units=imperial`;

        const weatherResponse = await fetch(`${weatherUrl}`);
        const weatherData = await weatherResponse.json();  // turn the response into JSON
        return weatherData; 
    }
}

// async getWeather(lat, lon) {
//     const weatherUrl = 'http://api.weatherstack.com/current';
//     const query = `${lat},${lon}`;
//     const units = 'f';
//     const weatherResponse = await fetch(`${weatherUrl}?access_key=${weatherKey}&query=${query}&units=${units}`);
//     const weatherData = await weatherResponse.json();  // turn the response into JSON
//     return weatherData; 
// }