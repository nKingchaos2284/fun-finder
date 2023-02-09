var searchBtn = document.querySelector("#searchBtn");
var resultsEl = document.querySelector("#results");
var miamiEl = 

function renderResults() {
    console.log("Results Rendered");
    resultsEl.classList.remove('hidden');
    resultsEl.classList.add('visible');

}

searchBtn.addEventListener('click', renderResults);