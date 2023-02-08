const API_KEY = `7fa03b692f6aa3af85af42b2dba34aee`;

const searchTemperature = () => {
    const city = document.getElementById('city-name').value;
    const url = `https://api.themoviedb.org/3/movie/550?api_key=7fa03b692f6aa3af85af42b2dba34aee`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayTemperature(data));
}

const setInnerText = (id, text) =>{
    document.getElementById(id).innerText = text;
}




const displayTemperature = temperature => {
    console.log(temperature);
    setInnerText('city', temperature.name);
    setInnerText('temp', temperature.main.temp);
    setInnerText('weather', temperature.weather[0].main);

    // movie icon settings 
    const url = `https://api.themoviedb.org/3/movie/550?api_key=7fa03b692f6aa3af85af42b2dba34aee`;
    const imgIcon = document.getElementById('image-icon');
    imgIcon.setAttribute('src', url);
}

