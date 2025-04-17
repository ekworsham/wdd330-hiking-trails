import { renderListWithTemplate } from "./utils.mjs";

function parkCardTemplate(park) {
    return `
        <li class="park-card">
            <h1><strong>Park Full Name</strong><br>${park.fullName}</h1>
            <h3><strong>Name:</strong> ${park.name}<br>State: ${park.states}</h3>
            <p><strong>Description</strong> <br>${park.description}</p>
            <p><strong>Designation</strong> <br>${park.designation}</p>
            <p><strong>Park URL</strong> <br>${park.url}</p>
            <p><strong>Directions</strong> <br>${park.directionsInfo}</p>
            <a class="latLong" href="/weather/?lat=${park.latitude}&lon=${park.longitude}"><strong>Weather Details</strong></a>
            <button class="favPark" data-id=${park.id}>Pick As Favorite</button>
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
        this.favoritePark();
        this.renderFavorites(list);
    }

    // render after doing the first stretch
    renderList(list) {
        const parksToDisplay = list.slice(0, 16);
        renderListWithTemplate(parkCardTemplate, this.parkList, parksToDisplay);
    }

    favoritePark() {
        const favButtons = document.querySelectorAll(".favPark");

        favButtons.forEach(button => {
            button.addEventListener("click", function(event) {
            let parks = JSON.parse(localStorage.getItem("parks")) || [];
            parks.push(event.target.dataset.id);
            localStorage.setItem("parks", JSON.stringify(parks));
            window.location.reload();
            }) 
        })
    }

    renderFavorites(list) {
        const favoritesSelector = document.querySelector(".favorites");
        const favoriteParks = JSON.parse(localStorage.getItem("parks")) || [];
        let filteredParks =[];
        favoriteParks.forEach(park => {
           filteredParks.push(list.filter(item => item.id == park));
        })
        filteredParks.forEach(park => {
            favoritesSelector.innerHTML += `<p>${park[0].fullName}.</p>`
        })
    }
}