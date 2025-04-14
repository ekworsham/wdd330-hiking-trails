import { renderListWithTemplate } from "./utils.mjs";

function parkCardTemplate(park) {
    return `
        <li class="park-card">
            <h1><strong style="font-size: 26px;">PARK FULL NAME</strong><br>${park.fullName}</h1>
            <h3><strong style="font-size: 20px;">NAME</strong><br>${park.name}<br>State: ${park.states}</h3>
            <p><strong style="font-size: 20px;">Description</strong><br>${park.description}</p>
            <p><strong style="font-size: 20px;">Designation</strong><br>${park.designation}</p>
            <p><strong style="font-size: 20px;">Park URL</strong><br>${park.url}</p>
            <p><strong style="font-size: 20px;">Directions</strong><br>${park.directionsInfo}</p>

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