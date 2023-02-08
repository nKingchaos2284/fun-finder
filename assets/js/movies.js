const API_KEY = `7fa03b692f6aa3af85af42b2dba34aee`;

const searchMovie = () => {
    const city = document.getElementById('city-name').value;
    const url = `https://api.themoviedb.org/3/movie/550?api_key=7fa03b692f6aa3af85af42b2dba34aee`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayMovie(data));
}

const setInnerText = (id, text) =>{
    document.getElementById(id).innerText = text;
}




const displayTemperature = temperature => {
    console.log(temperature);
    setInnerText('city', movies.name);
    setInnerText('movies', movies.main.temp);
   

    // movie icon settings 
    const url = `https://api.themoviedb.org/3/movie/550?api_key=7fa03b692f6aa3af85af42b2dba34aee`;
    const imgIcon = document.getElementById('image-icon');
    imgIcon.setAttribute('src', url);
}

