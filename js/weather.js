const API_KEY = config.WEATHER_API_KEY;

async function onGeoSuccess(geoLocationPosition) {
  const { latitude, longitude } = geoLocationPosition.coords;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&limit=5&appid=${API_KEY}&units=metric`;
  const response = await fetch(url);
  const data = await response.json();
  const { name } = data;
  const { description } = data.weather[0];

  const weatherElement = document.querySelector('#weather span:first-child');
  const cityElement = document.querySelector('#weather span:last-child');

  weatherElement.innerText = description;
  cityElement.innerText = name;
}
function onGeoError() {
  alert("Can't Find your geolocation.");
}
navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);
