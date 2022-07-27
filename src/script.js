// showing current day and time
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
let min = currentDate.getMinutes();
let year = currentDate.getFullYear();
let searchingDate = document.querySelector ("#today");
searchingDate.innerHTML = `${day} ${hour}:${min}`


//otherPlace 4week + 5 week temp in it City
//function show temp in searched place
function showTemp(response) {
console.log(response);
console.log(response.data.main.temp);
document.querySelector("#temperature").innerHTML=Math.round (response.data.main.temp);
/*let temp = Math.round (response.data.main.temp);
let currentTemp = document.querySelector("#temperature");
currentTemp.innerHTML=`${temp}`;it is the same to previous string*/
document.querySelector("#searchedPlace").innerHTML=response.data.name;
/*let city = response.data.name;
let myPlaceLoad = document.querySelector("#searchedPlace");
myPlaceLoad.innerHTML=`${city}`; - it is the same to previous string*/
document.querySelector("#wind").innerHTML= Math.round(response.data.wind.speed);
document.querySelector("#humidity").innerHTML= Math.round(response.data.main.humidity);
document.querySelector("#dayMax").innerHTML= Math.round(response.data.main.temp_max);
document.querySelector("#dayMin").innerHTML= Math.round(response.data.main.temp_min);
 // don't need right now: let weatherDescription = response.data.weather[0].description;
};


/*//on loading - currentTemp
function showPosition(position) {
  
  console.log(position.coords.latitude);
  console.log(position.coords.longitude);
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let units = "metric"
  let apiKey = "3403a0d9be1275191d4d17e1391e7b13";
  let apiUrl =
`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}`;

axios.get(apiUrl).then(showTemp);
};

navigator.geolocation.getCurrentPosition(showPosition);*/

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
/*let searchedPlace = document.querySelector ("#searchedPlace")
searchedPlace.innerHTML = `${searchInput.value}`; it is the same to previous string*/
let city = `${searchInput.value}`;

defaultSearch (city)

  };

  
// calling function to change place and temperature written in search
let searchForm = document.querySelector ("#searchForPlace");
searchForm.addEventListener ("submit", changePlace);

//On-load search for a city
defaultSearch ("Kyiv");


//function for button
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

let button = document.querySelector ("button");
button.addEventListener ("click", myCurrentLocation);


//end 5 week





 /*image change
function imageChange (weatherDescription) {
  
if (weatherDescription==="light intensity shower rain") {src="images\light-rain.png"
} 
else if (weatherDescription==="broken clouds") {src="images\Cloudy.png"}
else if (weatherDescription==="overcast clouds") {src="images\Overcast.png"}
else {
src="images/Sunny-Period.png"
}
searchForm.addEventListener("#weatherImg")=imageChange*/



//changing to F
/* commenting- will be in future week
function changeTemptoF(event) {
event.preventDefault ();
let temp = document.querySelector ("#temperature")
temp.innerHTML = `${Math.round(16 * 1.8 + 32  )}`;
}

let metricToF = document.querySelector ("#F");

metricToF.addEventListener ("click", changeTemptoF)


//changing to C
function changeTemptoC(event) {
event.preventDefault ();
let temp = document.querySelector ("#temperature")
temp.innerHTML = `${Math.round((61 -32 )/ 1.8  )}`;
}

let metricToC = document.querySelector ("#C");

metricToC.addEventListener ("click", changeTemptoC)
*/


/*Firstloading - showing today date
(copied. wanted to make if in dateInput user chose another date, 
than in #today is showing only Day, 
but after 3 hours of trying to do so, decided to mske in next time 😓)
  
const dateInput = document.getElementById('date');
dateInput.value = formatDate();
  
console.log(formatDate());
  
function padTo2Digits(num) {
return num.toString().padStart(2, '0');
  }
function formatDate(date = new Date()) {
return [
date.getFullYear(),
padTo2Digits(date.getMonth() + 1),
padTo2Digits(date.getDate()),
].join('-');*/