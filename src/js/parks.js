import { loadHeaderFooter } from "./utils.mjs"

const apiKey =import.meta.env.VITE_API
const baseUrl = 'https://developer.nps.gov/api/v1/parks';

async function getAllParks() {
    const response = await fetch(`${baseUrl}?api_key=${apiKey}`);
    const data = await response.json();  // turn the response into JSON
    console.log(data);
    
}

async function getParkName() {
    const parkName = document.getElementById('name');
    parkName.innerHTML = '';
    
}

getAllParks();
loadHeaderFooter();








// EXAMPLE 
// Template for rendering product cards

// HTML
    // <section class="products">
    //   <h2>Top Products: <span class="title highlight"></span></h2>
    //   <ul class="product-list"></ul>
    // </section>

// JS
// function productCardTemplate(product) {
//     return `
//         <li class="product-card">
//             <a href="product_pages/?product=${product.Id}">
//                 <img src="${product.Images.PrimaryMedium}" alt="Image of ${product.Name}" />
//                 <h3 class="card__brand">${product.Brand.Name}</h3>
//                 <h2 class="card__name">${product.NameWithoutBrand}</h2>
//                 <p class="product-card__price">Suggested Retail Price $${product.SuggestedRetailPrice}</p>
//                 <p class="product-card__price">Final Price $${product.FinalPrice}</p>
//                 <p class="product-card__price">Discount Total $${(product.SuggestedRetailPrice - product.FinalPrice).toFixed(2)}</p>
//             </a>
//         </li>
//     `;
// }
