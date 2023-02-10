var searchBtn = document.querySelector("#searchBtn");
var resultsEl = document.querySelector("#results");
var miamiEl = document.querySelector("#miami");
var sandiegoEl = document.querySelector("#sandiego");
var lasvegasEl = document.querySelector("#lasvegas");
var losangelesEl = document.querySelector("#losangeles");
var newyorkEl = document.querySelector("#newyork");
var seattleEl = document.querySelector("#seattle");

// function for clicks on search button
function renderResults() {
    console.log("Results Rendered");
    resultsEl.classList.remove('hidden');
    resultsEl.classList.add('visible');
}

// functions for clicks on recommended cards

// search button event listener
searchBtn.addEventListener('click', renderResults);
// recommended card event listeners
miamiEl.addEventListener('click', );
sandiegoEl.addEventListener('click', );
lasvegasEl.addEventListener('click', );
losangelesEl.addEventListener('click', );
newyorkEl.addEventListener('click', );
seattleEl.addEventListener('click', );