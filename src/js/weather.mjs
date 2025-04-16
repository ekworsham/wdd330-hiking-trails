import { getParam } from "./utils.mjs";

// Wrap in an <a> tag to make it clickable
function weatherTemplate(weather) {
    console.log(weather)
    return `
        <h1>CITY: ${weather.location.name}</h1>
        <p>STATE: ${weather.location.region}</p>
        <p>Current temperature is ${weather.current.temperature}°</p>
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

