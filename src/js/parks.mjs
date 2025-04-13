import { renderListWithTemplate } from "./utils.mjs";


// Wrap in an <a> tag to make it clickable
function parkCardTemplate(park) {
    
    return `
    <li class="park-card">
            <h1>${park.fullName}</h1>
            <p>${park.description}</p>
            <button class="weatherDetails">Get Weather</button>
            </li>
            `;
        }
    export default class Parks {
    constructor(dataSource, parkList) {
        this.dataSource = dataSource;
        this.parkList = parkList;
    }

    async init() {
        const list = await this.dataSource.getAllParks();
        this.renderList(list);
        this.addWeatherButtonListeners();
    }

    // render after doing the first stretch
    renderList(list) {
        renderListWithTemplate(parkCardTemplate, this.parkList, list);
    }

    addWeatherButtonListeners() {
        const buttons = document.querySelectorAll(".weatherDetails");
        buttons.forEach(button => {
            button.addEventListener("click", function() {
                window.location.href = "weather/index.html";
            });
        });
    }

   
}