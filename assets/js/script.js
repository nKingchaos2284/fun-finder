var searchBtn = document.getElementById("searchBtn");
var resultsEl = document.querySelector("#results");
var resultsFor = document.querySelector("#results-for");
var miamiEl = document.querySelector("#miami");
var sandiegoEl = document.querySelector("#sandiego");
var lasvegasEl = document.querySelector("#lasvegas");
var losangelesEl = document.querySelector("#losangeles");
var newyorkEl = document.querySelector("#newyork");
var seattleEl = document.querySelector("#seattle");
var cityInput = document.getElementById("searchCity");
var stateSearch = document.getElementById("searchState");
var weatherResults = document.querySelector("#weather-results");
var weather = weatherResults.children[1].children[0];
var temperature = weatherResults.children[1].children[1];
var humidity = weatherResults.children[1].children[2];
var wind = weatherResults.children[1].children[3];

// function for clicks on search button
function searchResults() {
  var apiUrlWeather =
    "http://api.openweathermap.org/geo/1.0/direct?q=" +
    cityInput.value +
    "," +
    stateSearch.value +
    ",USA" +
    "&appid=14951c93f3d11e8ac8bed96dd90e8bc7";
  console.log(apiUrlWeather);
  fetch(apiUrlWeather)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      var lat = data[0].lat;
      var lng = data[0].lon;

      apiUrlWeather =
        "https://api.openweathermap.org/data/2.5/weather?lat=" +
        lat +
        "&lon=" +
        lng +
        "&appid=14951c93f3d11e8ac8bed96dd90e8bc7";

      fetch(apiUrlWeather)
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          console.log(data);
          var infoValue = data.weather[0].main + " (" + data.weather[0].description + ")";
          var tempValue = "Temperature: " + Math.round((data.main.temp - 273.15) * 1.8 + 32) + "°F";
          var humidityValue = "Humidity: " + data.main.humidity + "%";
          var windValue = "Wind: " + Math.round(data.wind.speed) + " mph";
          resultsFor.textContent = "Results for " + cityInput.value + ", " + stateSearch.value;
          weather.textContent = infoValue;
          temperature.textContent = tempValue;
          humidity.textContent = humidityValue;
          wind.textContent = windValue;
          resultsEl.classList.remove('hidden');
          resultsEl.classList.add('visible');
        });
    });
  var apiUrlMovies = 'https://api.themoviedb.org/3/movie/550?api_key=7fa03b692f6aa3af85af42b2dba34aee'
    fetch(apiUrlMovies)
};

// functions for clicks on recommended cards
function renderRecommended() {
  console.log(event.target);
  var card = event.target;
  var cardValue = card.getAttribute('alt');
  console.log(cardValue);
  var apiUrl =
    "http://api.openweathermap.org/geo/1.0/direct?q=" +
    cardValue +
    ",USA" +
    "&appid=14951c93f3d11e8ac8bed96dd90e8bc7";
  console.log(apiUrl);
  fetch(apiUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      var lat = data[0].lat;
      var lng = data[0].lon;

      apiUrl =
        "https://api.openweathermap.org/data/2.5/weather?lat=" +
        lat +
        "&lon=" +
        lng +
        "&appid=14951c93f3d11e8ac8bed96dd90e8bc7";

      fetch(apiUrl)
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          console.log(data);
          var infoValue = data.weather[0].main + " (" + data.weather[0].description + ")";
          var tempValue = "Temperature: " + Math.round((data.main.temp - 273.15) * 1.8 + 32) + "°F";
          var humidityValue = "Humidity: " + data.main.humidity + "%";
          var windValue = "Wind: " + Math.round(data.wind.speed) + " mph";
          resultsFor.textContent = "Results for " + cardValue;
          weather.textContent = infoValue;
          temperature.textContent = tempValue;
          humidity.textContent = humidityValue;
          wind.textContent = windValue;
          resultsEl.classList.remove('hidden');
          resultsEl.classList.add('visible');
        });
    });
};

// search button event listener
searchBtn.addEventListener("click", searchResults);
// recommended card event listenersgit add -
miamiEl.addEventListener('click', getPlaces);
sandiegoEl.addEventListener('click', renderRecommended);
lasvegasEl.addEventListener('click', renderRecommended);
losangelesEl.addEventListener('click', renderRecommended);
newyorkEl.addEventListener('click', renderRecommended);
seattleEl.addEventListener('click', renderRecommended);

