// showing current day and time
function formatDate (timestamp) {
let currentDate = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
let day = days[currentDate.getDay()];
let hour = currentDate.getHours();
if (hour<10){hour=`0${hour}`};
let min = currentDate.getMinutes();
if (min<10) {min=`0${min}`};
let year = currentDate.getFullYear();
return `${day} ${hour}:${min}`;
}

function formatDay (timestamp) {
let date = new Date (timestamp*1000);
let day = date.getDay();
let days= ["Sun",
"Mon",
"Tue",
"Wed",
"Thu",
"Fri",
"Sat"];
return days [day];
};

//loop for forecast
function displayForecast(response){
  console.log (response.data.daily);
  document.querySelector("#Night").innerHTML= Math.round(response.data.daily[0].temp.night);
  document.querySelector("#Morning").innerHTML= Math.round(response.data.daily[0].temp.morn);
  document.querySelector("#Afternoon").innerHTML= Math.round(response.data.daily[0].temp.day);
  document.querySelector("#Evening").innerHTML= Math.round(response.data.daily[0].temp.eve);
  let dailyForecast = response.data.daily;
  let forecastElement = document.querySelector("#forecast");
  let forecastHTML=`<div class = "row">`;

  dailyForecast.forEach (function(forecastDay, index) {
    if (index>0&&index<8) {
    forecastHTML= forecastHTML +
    ` <tr>
    <th scope="row" style="text-align:center">${formatDay (forecastDay.dt)}</th>
    <td style="text-align:center">${Math.round(forecastDay.temp.day)}°C</td>
    <td style="text-align:center">${Math.round(forecastDay.temp.night)}°C</td>
    <td style="text-align:center"><img src="http://openweathermap.org/img/wn/${forecastDay.weather[0].icon}@2x.png" width="75px"></td>
    <td style="text-align:center">${Math.round(forecastDay.wind_speed)} km/h</td>
    <td style="text-align:center">${Math.round(forecastDay.humidity)}%</td>
      </tr>`;
      
    };
  });
  forecastHTML=forecastHTML+`</div>`;
  forecastElement.innerHTML = forecastHTML;
   console.log(forecastHTML);
   
}

function getForecast (coordinates) {
  console.log (coordinates);
  let apiKey = "3403a0d9be1275191d4d17e1391e7b13";
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${apiKey}&units=metric`;
  console.log (apiUrl);
  axios.get(apiUrl).then(displayForecast);
}

//function show temp in searched place
function showTemp(response) {
console.log(response);
console.log(response.data.main.temp);
celsiusTemp=response.data.main.temp;
let tempElement = document.querySelector("#temperature");
tempElement.innerHTML=Math.round (celsiusTemp);
document.querySelector("#searchedPlace").innerHTML=response.data.name;
document.querySelector("#wind").innerHTML= Math.round(response.data.wind.speed);
document.querySelector("#humidity").innerHTML= Math.round(response.data.main.humidity);
document.querySelector("#dayMax").innerHTML= Math.round(response.data.main.temp_max);
document.querySelector("#dayMin").innerHTML= Math.round(response.data.main.temp_min);
document.querySelector("#description").innerHTML= response.data.weather[0].description;
let iconElement=document.querySelector("#icon");
iconElement.setAttribute("src", `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);
 // don't need right now: let weatherDescription = response.data.weather[0].description;
 


getForecast (response.data.coord);
};


//function search a city by default
function defaultSearch (city) {
let apiKey = "3403a0d9be1275191d4d17e1391e7b13";
let units = "metric"
let apiUrl =
`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
axios.get(apiUrl).then(showTemp);
}

//showing current temp + calling function show temp in searched place
function changePlace(event) {
event.preventDefault ();
let searchInput = document.querySelector ("#search-for-place");
console.log (searchInput.value);
let searchedPlace = document.querySelector ("#searchedPlace").value
let city = `${searchInput.value}`;
defaultSearch (city)
  };

  
// calling function to change place and temperature written in search
let searchForm = document.querySelector ("#searchForPlace");
searchForm.addEventListener ("submit", changePlace);




//function for current location
function showPosition(position) {
console.log(position.coords.latitude);
console.log(position.coords.longitude);
let lat = position.coords.latitude;
let lon = position.coords.longitude;
let units = "metric"
let apiKey = "3403a0d9be1275191d4d17e1391e7b13";
let apiUrl =
`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}`;

axios.get(apiUrl).then(showTemp);}


function myCurrentLocation(event) {
event.preventDefault ();
navigator.geolocation.getCurrentPosition(showPosition)
};


let currentLocation = document.querySelector ("#current-location");
currentLocation.addEventListener ("click", myCurrentLocation);


let celsiusTemp=null;



let searchingDate = document.querySelector ("#today");
searchingDate.innerHTML = formatDate();

//On-load search for a city
defaultSearch ("Kyiv");


//calling function forecast
 


