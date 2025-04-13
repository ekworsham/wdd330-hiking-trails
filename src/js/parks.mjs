import { renderListWithTemplate } from "./utils.mjs";

function parkCardTemplate(park) {
    return `
        <li class="park-card">
            <h1>PARK FULL NAME<br>${park.fullName}</h1>
            <h3>NAME<br>${park.name}. State: ${park.states}</h3>
            <p>Description<br>${park.description}</p>
            <p>Designation<br>${park.designation}</p>
            <p>Park URL<br>${park.url}</p>
            <p>Directions<br>${park.directionsInfo}</p>

            <a class="latLong" href="/weather/?lat=${park.latitude}&lon=${park.longitude}">Weather Details</a>
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
    }

    // render after doing the first stretch
    renderList(list) {
        const parksToDisplay = list.slice(0, 10);
        renderListWithTemplate(parkCardTemplate, this.parkList, parksToDisplay);
    }
}