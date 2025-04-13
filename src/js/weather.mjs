import { renderListWithTemplate } from "./utils.mjs";

// Wrap in an <a> tag to make it clickable
function weatherCardTemplate(weather) {
    return `
        <li class="weather-card">
            <h1>${location.name}</h1>
            <p>${location.region}</p>
            <p>${current.temperature}</p>
            <button class="homeButton">Return Home</button>
        </li>
    `;
}

export default class Weather {
    constructor(dataSource, weatherList) {
        this.dataSource = dataSource;
        this.weatherList = weatherList;
    }

    async init() {
        const list = await this.dataSource.getAllWeather();
        this.renderList(list);
        this.addHomeButtonListeners();
    }

    // render after doing the first stretch
    renderList(list) {
        renderListWithTemplate(weatherCardTemplate, this.weatherList, list);
    }

    addHomeButtonListeners() {
        const buttons = document.querySelectorAll(".homeButton");
        buttons.forEach(button => {
            button.addEventListener("click", function() {
                window.location.href = "src/index.html";
            });
        });
    }
}

