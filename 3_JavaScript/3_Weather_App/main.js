let data;

const inputBox = document.getElementById("location");
const form = document.getElementById("form");
const countryName = document.getElementById("countryName");
const stateName = document.getElementById("stateName");
const cityName = document.getElementById("cityName");
const humidity = document.getElementById("humidity");
const windSpeed = document.getElementById("windSpeed");
const temprature = document.getElementById("temprature");
const logoImage = document.getElementById("logoImage");
const weatherStatus = document.getElementById("weatherStatus");

const getWeather = async () => {

    if(inputBox.value === '' || !inputBox.value) {
        alert("Enter A Location");
        return;
    }

    const location = inputBox.value;

    // Fetch Details
    const key = import.meta.env.VITE_API_KEY;
    const data = await fetch(`https://api.weatherapi.com/v1/current.json?key=${key}&q=${location}`);

    const weatherData = await data.json();

    // Displaying the data in HTML
    countryName.textContent = weatherData.location.country;
    stateName.textContent = weatherData.location.region;
    cityName.textContent = weatherData.location.name;
    humidity.textContent = weatherData.current.humidity;
    windSpeed.textContent = weatherData.current.wind_kph;
    temprature.textContent = weatherData.current.temp_c;
    logoImage.src = weatherData.current.condition.icon;
    weatherStatus.textContent = weatherData.current.condition.text;

    inputBox.value = '';
    return;
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    getWeather();
    return;
})