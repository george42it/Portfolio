
const apiKey = "578369ee4f2bbe6172aa15ffda474cad";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherContainer = document.querySelector(".weather");
const errorContainer = document.querySelector(".error");

const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    const data = await response.json();

    if (response.status == 404) {
        errorContainer.style.display = "inline";
        weatherContainer.style.display = "none";
    } else {
        errorContainer.style.display = "none";
        weatherContainer.style.display = "inline";

        document.querySelector(".city").textContent = data.name;
        document.querySelector(".temp").textContent = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").textContent = data.main.humidity + "%";
        document.querySelector(".wind").textContent = data.wind.speed + "km/h";

        switch (data.weather[0].main) {
            case "Clouds":
                weatherIcon.src = "images/clouds.png";
                break;
            case "Clear":
                weatherIcon.src = "images/clear.png";
                break;
            case "Rain":
                weatherIcon.src = "images/rain.png";
                break;
            case "Drizzle":
                weatherIcon.src = "images/drizzle.png";
                break;
            case "Mist":
                weatherIcon.src = "images/mist.png";
                break;
            default:
                weatherIcon.src = ""; // Add default image or leave blank
        }
    }
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});

// checkWeather('New York'); 

//https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

//https://api.openweathermap.org/data/2.5/weather?q=germany&appid=578369ee4f2bbe6172aa15ffda474cad&units=metric

//578369ee4f2bbe6172aa15ffda474cad
