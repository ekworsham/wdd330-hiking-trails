import { renderListWithTemplate } from "./utils.mjs";

// Wrap in an <a> tag to make it clickable
function weatherCardTemplate(weather) {
    return `
        <li class="weather-card">
           
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
    }

    // render after doing the first stretch
    renderList(list) {
        renderListWithTemplate(weatherCardTemplate, this.weatherList, list);
    }
}

