import format from "date-fns/format";
import "./style.css";
//pass in city, then call display weather with fetched data//
async function getCurrentWeather(currentCity) {
  let apiLink =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    currentCity +
    "&units=imperial&appid=3dc68dfc31905e08624208e02dc62e0e";
  const response = await fetch(
    //"https://api.openweathermap.org/data/2.5/weather?q=Tampa&&units=imperial&appid=3dc68dfc31905e08624208e02dc62e0e"
    apiLink,
    { mode: "cors" }
  );
  console.log(response);
  const weatherData = await response.json();
  console.log(weatherData);
  displayWeather(weatherData);
  //getMap(weatherData);
}

//display the weather on the DOM//
function displayWeather(weatherData) {
  const city = weatherData.name;
  const country = weatherData.sys.country;
  const temperature = weatherData.main.temp;
  const feelsLike = weatherData.main.feels_like;
  const humidity = weatherData.main.humidity;
  const weather = weatherData.weather[0].description;
  console.log(weatherData);

  const cityDisplay = document.querySelector("#city");
  const tempDisplay = document.querySelector("#temperature");
  const humidityDisplay = document.querySelector("#humidity");
  const feelsLikeDisplay = document.querySelector("#feels_like");
  const weatherDisplay = document.querySelector("#weather");

  cityDisplay.innerHTML = city + ", " + country;
  tempDisplay.innerHTML = temperature + "\u00B0" + "F";
  humidityDisplay.innerHTML = humidity + "%";
  feelsLikeDisplay.innerHTML = feelsLike + "\u00B0" + "F";
  weatherDisplay.innerHTML = weather;
}

//change the city through text input, pass that info to getCurrentWeather//
function changeCity() {
  const textInput = document.querySelector("#textInput");
  let currentCity = textInput.value;
  getCurrentWeather(currentCity);
}

//assign change city to the submit button//
function assignSubmitBtn() {
  const submitBtn = document.querySelector("#submitBtn");
  submitBtn.addEventListener("click", changeCity);
}

async function getWeatherForecast() {
  const response = await fetch(
    "https://api.openweathermap.org/data/2.5/forecast?q=Tampa&&units=imperial&appid=3dc68dfc31905e08624208e02dc62e0e",
    { mode: "cors" }
  );
  const forecastData = await response.json();
  console.log("forecast");
  console.log(forecastData);
  displayDailyForecast(forecastData);
  //    "https://api.openweathermap.org/data/2.5/forecast?q=Tampa&&units=imperial&appid=3dc68dfc31905e08624208e02dc62e0e",
}

function displayDailyForecast(forecastData) {
  const time0 = document.querySelector("#time0");
  const temp0 = document.querySelector("#temp0");
  const rain0 = document.querySelector("#rain0");
  const time1 = document.querySelector("#time1");
  const temp1 = document.querySelector("#temp1");
  const rain1 = document.querySelector("#rain1");
  const time2 = document.querySelector("#time2");
  const temp2 = document.querySelector("#temp2");
  const rain2 = document.querySelector("#rain2");

  console.log(forecastData.list[0].dt_txt);
  time0.innerHTML = format(new Date(forecastData.list[0].dt_txt), "haaa");
  temp0.innerHTML = forecastData.list[0].main.temp + "\u00B0" + "F";
  rain0.innerHTML = forecastData.list[0].pop * 100 + "%";

  time1.innerHTML = format(
    new Date(forecastData.list[1].dt_txt),
    "haaa"
    //"MMM eo haaa"
  );
  temp1.innerHTML = forecastData.list[1].main.temp + "\u00B0" + "F";
  rain1.innerHTML = forecastData.list[1].pop * 100 + "%";

  time2.innerHTML = format(new Date(forecastData.list[2].dt_txt), "haaa");
  temp2.innerHTML = forecastData.list[2].main.temp + "\u00B0" + "F";
  rain2.innerHTML = forecastData.list[2].pop * 100 + "%";
}

getCurrentWeather("Tampa");
getWeatherForecast();
assignSubmitBtn();

//"MMM/eo/K/aaa"
