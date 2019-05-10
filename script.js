var zipcode = prompt(`Enter zipcode:`);

var url = new URL('https://api.openweathermap.org/data/2.5/weather?zip=NULL&appid=c331effff19eabf7638fb78114be2649&units=Imperial');

var query_string = url.search;

var search_params = new URLSearchParams(query_string);

search_params.set('zip', zipcode);

url.search = search_params.toString();

var new_url = url.toString();

var settings = {
  "async": true,
  "crossDomain": true,
  "url": new_url,
  "method": "GET"
}

$.ajax(settings).done(function (response) {

  // Location
  var loc = response.name;
  $("#currentLocation").append(loc);

  // Temperature
  var temp = response.main.temp_max;
  $("#currentTemp").append(temp);

  // Weather
  var weather = response.weather[0].main;
  $("#currentWeather").append(weather);

  // Weather description
  var desc = response.weather[0].description;
  $("#weatherDesc").append(desc);

  // Wind
  var wind = response.wind.speed;
  $("#windSpeed").append(wind);
});
