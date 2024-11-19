const weather = document.getElementById('weather');

loadWeather();

async function loadWeather() {
    const response =  await fetch('https://api.openweathermap.org/data/2.5/weather?' +
    'lat=49.233021&lon=28.493299&units=metric&appid=04b66d89d91411cc7a3053c381b5b691')
    const data = await response.json()
    const city = data.name;
    const weatherState = data.weather[0].main;
    const weatherTemp = Math.floor(data.main.temp);
    const weatherDescription = data.weather[0].description;

    let capitaliseWeatherDescription = weatherDescription.charAt(0).toUpperCase() + weatherDescription.slice(1)

    console.log(data);
    weather.innerText = "";
    weather.innerHTML = `
        <div class="city-container">
            <p class="city">${city}</p>
            <img src="images/restart.png" id="updateBtn" alt="update-btn"/>
        </div>
        <div class="weather-details">
            <img class="weatherState" src="./images/${weatherState}.png"  alt="weather-state"/>
            <p class="weatherDescription">${capitaliseWeatherDescription}</p>  
            <p class="weatherTemp">${weatherTemp}°C</p>  
        </div>
    `;

    const updateBtn = document.getElementById('updateBtn');
    updateBtn.addEventListener('click', () => {
        loadWeather();
    });
}
