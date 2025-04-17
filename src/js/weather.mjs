import { getParam } from "./utils.mjs";

// Wrap in an <a> tag to make it clickable
function weatherTemplate(weather) {
    console.log(weather)
    return `
        <h1>WEATHER FORCAST</h1>
        <h2>CITY: ${weather.name}</h2>
        <p><strong>Description: </strong>${weather.weather[0].description}</p>
        <p><strong>Current temperature is </strong>${weather.main.temp}°</p>
        <button class="homeButton">Return Home</button>
    `;
}
export default class Weather {
    constructor(dataSource, weatherElement) {
        this.dataSource = dataSource;
        this.weatherElement = weatherElement;
    }

    async init() {
        const lat = getParam("lat");
        const lon = getParam("lon");
        const fixedLon = lon.replace("/", "")
        const details = await this.dataSource.getWeather(lat, fixedLon);
        this.weatherElement.innerHTML = weatherTemplate(details);
        
        this.addHomeButtonListeners();
    }

    addHomeButtonListeners() {
        const buttons = document.querySelectorAll(".homeButton");
        buttons.forEach(button => {
            button.addEventListener("click", function() {
                window.location.href = "/";
            });
        });
    }
}

