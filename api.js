var axios = require("axios").default;

var options = {
  method: 'GET',
  url: 'https://amazon-price1.p.rapidapi.com/search',
  params: {keywords: '<REQUIRED>', marketplace: 'US'},
  headers: {
    'x-rapidapi-host': 'amazon-price1.p.rapidapi.com',
    'x-rapidapi-key': 'a10c897dc4msh3092516938f5d50p1fbf38jsnb5ff9d21e174'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});