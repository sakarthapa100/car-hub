import { headers } from "next/headers";

const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars',
  params: {model: 'corolla'},
  headers: {
    'x-rapidapi-key': '72a139afbfmsh5560a5c6dedfa38p155d2fjsn9a06a7799b53',
    'x-rapidapi-host': 'cars-by-api-ninjas.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}

export async function fetchCars(){
  const headers = {
    'x-rapidapi-key': '72a139afbfmsh5560a5c6dedfa38p155d2fjsn9a06a7799b53',
    'x-rapidapi-host': 'cars-by-api-ninjas.p.rapidapi.com'
  }




const response = await axios( 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars', {
  headers:headers,
}) 
const result = await response.json()
return result

}