const apiKey = import.meta.env.VITE_API
const weatherKey = import.meta.env.WEATHER_API


export default class ExternalServices {
    constructor () {
        
    }
    
    async getAllParks() {
        const baseUrl = 'https://developer.nps.gov/api/v1/parks';
        const response = await fetch(`${baseUrl}?api_key=${apiKey}`);
        const data = await response.json();  // turn the response into JSON
        return data.data; 
    }

    async getWeather() {
        const weatherUrl = 'http://api.weatherstack.com/current?access_key=';
        const weatherResponse = await fetch(`${weatherUrl}?api_key=${weatherKey}`);
        const weatherData = await weatherResponse.json();  // turn the response into JSON
        return weatherData.data; 
    }
}
