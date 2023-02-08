const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://world-geo-data.p.rapidapi.com/countries/US',
  params: {language: 'en,ru,zh,es,ar,fr,fa,ja,pl,it,pt,de'},
  headers: {
    'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
    'X-RapidAPI-Host': 'world-geo-data.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});