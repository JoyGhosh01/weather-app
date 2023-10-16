const apikey = "a50b049d081d7eee2187368a6f51d85f";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

async function checkWeather(city){
  const response = await fetch(apiurl + city + `&appid=${apikey}`);
  var data = await response.json();
  console.log(data);
  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

  if(data.weather[0].main == 'Clouds'){
    weathericon.src = "weather-app-img/images/clouds.png";
  }
  else if(data.weather[0].main == 'Clear'){
    weathericon.src = "weather-app-img/images/clear.png";
  }
  else if(data.weather[0].main == 'Drizzle'){
    weathericon.src = "weather-app-img/images/drizzle.png";
  }
  else if(data.weather[0].main == 'Mist'){
    weathericon.src = "weather-app-img/images/mist.png";
  }
  else if(data.weather[0].main == 'Rain'){
    weathericon.src = "weather-app-img/images/rain.png";
  }
  else if(data.weather[0].main == 'Snow'){
    weathericon.src = "weather-app-img/images/snow.png";
  }
}

const serchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const weathericon = document.querySelector(".weather-icon");

searchbtn.addEventListener("click", ()=>{
  checkWeather(serchbox.value);
})