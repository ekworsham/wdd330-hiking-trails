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