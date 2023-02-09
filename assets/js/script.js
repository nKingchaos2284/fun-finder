var searchBtn = document.querySelector("#searchBtn");
var resultsEl = document.querySelector("#results");
var miamiEl = document.querySelector();
var sandiegoEl = document.querySelector();
var lasvegasEl = document.querySelector();
var losangelesEl = document.querySelector();

function renderResults() {
    console.log("Results Rendered");
    resultsEl.classList.remove('hidden');
    resultsEl.classList.add('visible');

}

searchBtn.addEventListener('click', renderResults);