const apiKey =import.meta.env.VITE_API


export default class ExternalServices {
    constructor () {
        
    }
    
    async getAllParks() {
        const baseUrl = 'https://developer.nps.gov/api/v1/parks';
        const response = await fetch(`${baseUrl}?api_key=${apiKey}`);
        const data = await response.json();  // turn the response into JSON
        return data.data; 
    }

    
}
