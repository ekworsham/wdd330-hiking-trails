const apiKey ='ykgLOSmFa46MNpez8FKlj5BT1pg9FL8z2Px3SCmM';
const baseUrl = 'https://developer.nps.gov/api/v1/parks';

async function getAllParks() {
    let response = await fetch(`${baseUrl}?api_key=${apiKey}`);
    const data = await response.json();  // turn the response into JSON
    console.log(data);
    
}
getAllParks();
