const API_KEY = config.WEATHER_API_KEY;

async function onGeoSuccess(geoLocationPosition) {
  const { latitude, longitude } = geoLocationPosition.coords;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&limit=5&appid=${API_KEY}&units=metric`;
  const response = await fetch(url);
  const data = await response.json();
  const { name, main, weather } = data;
  const { temp } = main;
  const { description } = weather[0];

  const tempElement = document.querySelector('#weather span.current-temp');
  const weatherElement = document.querySelector(
    '#weather span.current-weather'
  );
  const cityElement = document.querySelector('#weather span.current-city');

  tempElement.innerText = `${temp}°C`;
  weatherElement.innerText = description;
  cityElement.innerText = name;
}
function onGeoError() {
  alert("Can't Find your geolocation.");
}
navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);
