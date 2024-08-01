let apikey = "7963b771dda39880ae153de820cbe57a";
let apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const weathericon = document.querySelector(".weather-icon")
const errorimg = document.querySelector(".error-image");

async function checkWeather(city) {
    let response = await fetch(apiUrl + city + `&appid=${apikey}`);

    if(response.status == 404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
        errorimg.src = "images/error-image.webp";
    }
    else{
    let data = await response.json();
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " k/mh";

    if (data.weather[0].main == "Clouds") {
        weathericon.src = "images/clouds.png";
    }
    else if (data.weather[0].main == "Clear") {
        weathericon.src = "images/clear.png";
    }
    else if (data.weather[0].main == "Drizzel") {
        weathericon.src = "images/drizzel.png";
    }
    else if (data.weather[0].main == "Humidity") {
        weathericon.src = "images/humidity.png";
    }
    else if (data.weather[0].main == "Mist") {
        weathericon.src = "images/mist.png";
    }
    else if (data.weather[0].main == "Rain") {
        weathericon.src = "images/rain.png";
    }
    else if (data.weather[0].main == "Snow") {
        weathericon.src = "images/snow.png";
    }
    else if(data.weather[0].main == "Wind"){
        weathericon.src = "images/wind.png";
    }
    document.querySelector(".weather").style.display="block";
    document.querySelector(".error").style.display="none";
}
}
searchbtn.addEventListener("click", () => {
    checkWeather(searchbox.value);
})

searchbox.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        checkWeather(searchbox.value);
    }
});