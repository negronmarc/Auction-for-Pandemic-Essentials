var axios = require("axios").default;
// require('dotenv').config();
//Uncomment line two if it comes back unauth

var options = {
  method: 'GET',
  url: 'https://amazon-price1.p.rapidapi.com/search',
  params: {keywords: '<REQUIRED>', marketplace: 'US'},
  headers: {
    'x-rapidapi-host': 'amazon-price1.p.rapidapi.com',
    'x-rapidapi-key': process.env.API_KEY,
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});