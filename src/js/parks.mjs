import { renderListWithTemplate } from "./utils.mjs";

// Wrap in an <a> tag to make it clickable
function parkCardTemplate(park) {
    return `
        <li class="park-card">
            <h1>${park.fullName}</h1>
            <p">${park.description}</p>
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
        renderListWithTemplate(parkCardTemplate, this.parkList, list);
    }
}

