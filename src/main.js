import { isToday, isTomorrow, parseISO } from "date-fns";
import format from "date-fns/format";
import "./css/style.css";
import "./css/weather-icons.min.css";
//pass in city, then call display weather with fetched data//

let mapFlag;

async function getCurrentWeather(currentCity) {
  let apiLink =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    currentCity +
    "&units=imperial&appid=3dc68dfc31905e08624208e02dc62e0e";
  const response = await fetch(apiLink, { mode: "cors" });
  console.log(response);
  const weatherData = await response.json();
  console.log("current weather data");
  console.log(weatherData);
  displayWeather(weatherData);
  getMap(weatherData);
  //changeMap(weatherData);
}

//display the weather on the DOM//
function displayWeather(weatherData) {
  const city = weatherData.name;
  const country = weatherData.sys.country;
  const currentWeatherIconId = weatherData.weather[0].id;
  const temperature = Math.round(weatherData.main.temp);
  const feelsLike = Math.round(weatherData.main.feels_like);
  const humidity = weatherData.main.humidity;
  const weather = weatherData.weather[0].main;

  const cityDisplay = document.querySelector("#city");
  const currentWeatherIcon = document.querySelector("#currentWeatherIcon");
  const tempDisplay = document.querySelector("#temperature");
  const humidityDisplay = document.querySelector("#humidity");
  const feelsLikeDisplay = document.querySelector("#feels_like");
  const weatherDisplay = document.querySelector("#weather");

  cityDisplay.innerHTML = city + ", " + country;
  currentWeatherIcon.removeAttribute("class");
  currentWeatherIcon.classList.add("wi", "wi-owm-" + currentWeatherIconId); //edits weather icon pulling from current weather//
  tempDisplay.innerHTML = temperature + "\u00B0" + "F";
  humidityDisplay.innerHTML = humidity + "%";
  feelsLikeDisplay.innerHTML = feelsLike + "\u00B0" + "F";
  weatherDisplay.innerHTML = weather;
}

//change the city through text input, pass that info to getCurrentWeather//
function changeCity() {
  const textInput = document.querySelector("#textInput");
  let currentCity = textInput.value;
  textInput.value = "";
  getCurrentWeather(currentCity);
  getWeatherForecast(currentCity);
  getWeeklyForecast(currentCity);
}

//assign change city to the submit button//
function assignSubmitBtn() {
  const submitBtn = document.querySelector("#submitBtn");
  submitBtn.addEventListener("click", changeCity);
}

async function getWeatherForecast(currentCity) {
  let apiLink =
    "https://api.openweathermap.org/data/2.5/forecast?q=" +
    currentCity +
    "&&units=imperial&appid=3dc68dfc31905e08624208e02dc62e0e";
  const response = await fetch(apiLink, { mode: "cors" });
  const forecastData = await response.json();
  console.log("forecast");
  console.log(forecastData);
  displayDailyForecast(forecastData);
}

//inefficient, but was quick to throw together//
function displayDailyForecast(forecastData) {
  const time0 = document.querySelector("#time0");
  const forecastIcon0 = document.querySelector("#forecastIcon0");
  const temp0 = document.querySelector("#temp0");
  const rain0 = document.querySelector("#rain0");
  const time1 = document.querySelector("#time1");
  const forecastIcon1 = document.querySelector("#forecastIcon1");
  const temp1 = document.querySelector("#temp1");
  const rain1 = document.querySelector("#rain1");
  const time2 = document.querySelector("#time2");
  const forecastIcon2 = document.querySelector("#forecastIcon2");
  const temp2 = document.querySelector("#temp2");
  const rain2 = document.querySelector("#rain2");

  console.log(forecastData.list[0].dt_txt);
  time0.innerHTML = format(new Date(forecastData.list[0].dt_txt), "haaa");
  forecastIcon0.removeAttribute("class");
  forecastIcon0.classList.add(
    "forecastIcon",
    "wi",
    "wi-owm-" + forecastData.list[0].weather[0].id
  );
  temp0.innerHTML = Math.round(forecastData.list[0].main.temp) + "\u00B0" + "F";
  rain0.innerHTML = Math.round(forecastData.list[0].pop * 100) + "%";

  time1.innerHTML = format(new Date(forecastData.list[1].dt_txt), "haaa");
  forecastIcon1.removeAttribute("class");
  forecastIcon1.classList.add(
    "forecastIcon",
    "wi",
    "wi-owm-" + forecastData.list[1].weather[0].id
  );
  temp1.innerHTML = Math.round(forecastData.list[1].main.temp) + "\u00B0" + "F";
  rain1.innerHTML = Math.round(forecastData.list[1].pop * 100) + "%";

  time2.innerHTML = format(new Date(forecastData.list[2].dt_txt), "haaa");
  forecastIcon2.removeAttribute("class");
  forecastIcon2.classList.add(
    "forecastIcon",
    "wi",
    "wi-owm-" + forecastData.list[2].weather[0].id
  );
  temp2.innerHTML = Math.round(forecastData.list[2].main.temp) + "\u00B0" + "F";
  rain2.innerHTML = Math.round(forecastData.list[2].pop * 100) + "%";
}

//whoo boy, this one is not optimized//
async function getWeeklyForecast(currentCity) {
  let apiLink =
    "https://api.openweathermap.org/data/2.5/forecast?q=" +
    currentCity +
    "&&units=imperial&appid=3dc68dfc31905e08624208e02dc62e0e";
  const response = await fetch(apiLink, { mode: "cors" });
  const weeklyForecastData = await response.json();
  // console.log(weeklyForecastData);

  const dateArray = [];
  const sortedDatesArray = [];
  const filteredFinalDatesArray = [];
  let highAndLowArray = [];

  for (let i = 0; i < weeklyForecastData.list.length; i++) {
    dateArray.push(weeklyForecastData.list[i].dt_txt);
  }

  const formattedDates = dateArray.map(function (e) {
    return format(new Date(e), "d");
  });

  //console.log(formattedDates);

  for (let i = 0; i < dateArray.length; i++) {
    let tomorrowChecker = isTomorrow(parseISO(dateArray[i]));
    if (tomorrowChecker === true) {
      sortDays(i);
      break;
    }
  }

  //formatted dates is used for easy comparison, date array is the full date//
  function sortDays(i) {
    let tempArray = [];
    while (i < dateArray.length) {
      let incrementedVal = i + 1;
      if (formattedDates[i] === formattedDates[incrementedVal]) {
        tempArray.push(dateArray[i]);
      } else if (formattedDates[i] != formattedDates[incrementedVal]) {
        tempArray.push(dateArray[i]);

        const median = Math.floor(tempArray.length / 2);
        sortedDatesArray.push(tempArray[median]);
        console.log(tempArray);
        highAndLow(tempArray, highAndLowArray);
        tempArray = [];
      }
      i++;
    }
    console.log(highAndLowArray);
    filterMainList();
  }

  function highAndLow(tempArray, highAndLowArray) {
    let arr = [];
    let incrementedVal = 0;
    console.log(weeklyForecastData.list.length);
    for (let p = 0; p < weeklyForecastData.list.length; p++) {
      if (weeklyForecastData.list[p].dt_txt == tempArray[incrementedVal]) {
        arr.push(weeklyForecastData.list[p].main.temp);
        incrementedVal++;
      }
    } //insertion sort
    for (let i = 1; i < arr.length; i++) {
      let curr = arr[i];
      let j = i - 1;

      while (j >= 0 && arr[j] > curr) {
        arr[j + 1] = arr[j];
        j--;
      }
      arr[j + 1] = curr;
    }
    console.log(arr);
    const highAndLowVals = {
      low: arr[0],
      high: arr[arr.length - 1],
    };
    highAndLowArray.push(highAndLowVals);
    console.log(arr[0]);
    console.log(arr[arr.length - 1]);
  }

  function filterMainList() {
    let incrementedVal = 0;
    for (let i = 0; i < weeklyForecastData.list.length; i++) {
      if (
        weeklyForecastData.list[i].dt_txt === sortedDatesArray[incrementedVal]
      ) {
        filteredFinalDatesArray.push(weeklyForecastData.list[i]);
        incrementedVal++;
      }
    }
    displayWeeklyForecast(filteredFinalDatesArray, highAndLowArray);
  }
}

function displayWeeklyForecast(filteredFinalDatesArray, highAndLowArray) {
  let weekForecast = document.getElementById("weekForecast");
  //clears every pass//
  while (weekForecast.childElementCount > 0) {
    weekForecast.removeChild(weekForecast.firstElementChild);
  }
  for (let i = 0; i < filteredFinalDatesArray.length; i++) {
    let weeklyForecastBox = document.createElement("div");
    weeklyForecastBox.classList.add = "weeklyForecastBox";

    let dayAndIconContainer = document.createElement("div");
    dayAndIconContainer.classList.add("dayAndIconContainer");
    let dayOfWeek = format(new Date(filteredFinalDatesArray[i].dt_txt), "iii");
    let dayOfWeekDisplay = document.createElement("p");
    dayOfWeekDisplay.classList.add("dayOfWeek");
    dayOfWeekDisplay.innerHTML = dayOfWeek;
    let weatherId = filteredFinalDatesArray[i].weather[0].id;
    let weatherDisplay = document.createElement("div");
    weatherDisplay.classList.add(
      "weatherIconWeekly",
      "wi",
      "wi-owm-" + weatherId
    );

    let highAndLowContainer = document.createElement("div");
    highAndLowContainer.classList.add("highAndLowContainer");
    console.log(highAndLowArray[i].low);
    let lowTemp = Math.round(highAndLowArray[i].low) + "\u00B0" + "F";
    let lowHeader = document.createElement("h3");
    lowHeader.classList.add("highAndLowHeader");
    lowHeader.innerHTML = "Low";
    let lowTempDisplay = document.createElement("p");
    lowTempDisplay.innerHTML = lowTemp;
    lowTempDisplay.classList.add("low");

    let highHeader = document.createElement("h3");
    highHeader.classList.add("highAndLowHeader");
    highHeader.innerHTML = "High";
    let highTemp = Math.round(highAndLowArray[i].high) + "\u00B0" + "F";
    let highTempDisplay = document.createElement("p");
    highTempDisplay.innerHTML = highTemp;
    highTempDisplay.classList.add("high");

    weekForecast.append(weeklyForecastBox);
    weeklyForecastBox.append(dayAndIconContainer);
    dayAndIconContainer.append(dayOfWeekDisplay);
    dayAndIconContainer.append(weatherDisplay);
    weeklyForecastBox.append(highAndLowContainer);
    highAndLowContainer.append(highHeader);
    highAndLowContainer.append(lowHeader);
    highAndLowContainer.append(highTempDisplay);
    highAndLowContainer.append(lowTempDisplay);
  }
}

//called in get current weather//
function getMap(weatherData) {
  console.log("mapFlag");
  console.log(map);
  let lat = weatherData.coord.lat;
  let lon = weatherData.coord.lon;
  if (mapFlag === true) {
    let mapToRemove = document.getElementById("map");
    mapToRemove.remove();
    let remake = document.createElement("div");
    remake.id = "map";
    inputWrapper.prepend(remake);
    let map = L.map("map").setView([lat, lon], 9);
    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution: "© OpenStreetMap",
    }).addTo(map);
  } else {
    let map = L.map("map").setView([lat, lon], 9);
    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution: "© OpenStreetMap",
    }).addTo(map);
    mapFlag = true;
  }
}

getCurrentWeather("Tampa");
getWeatherForecast("Tampa");
getWeeklyForecast("Tampa");
assignSubmitBtn();
