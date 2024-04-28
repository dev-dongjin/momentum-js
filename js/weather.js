const API_KEY = config.WEATHER_API_KEY;

async function onGeoSuccess(geoLocationPosition) {
  const { latitude, longitude } = geoLocationPosition.coords;
  const url = `https://xm30zrask1.execute-api.us-east-1.amazonaws.com/prod/weather?latitude=${latitude}&longitude=${longitude}`;
  const response = await fetch(url);
  const data = await response.json();
  const { message } = data;
  const { name, temp, weatherDescription } = message;

  const tempElement = document.querySelector('#weather span.current-temp');
  const weatherElement = document.querySelector(
    '#weather span.current-weather'
  );
  const cityElement = document.querySelector('#weather span.current-city');

  tempElement.innerText = `${temp}°C`;
  weatherElement.innerText = weatherDescription;
  cityElement.innerText = name;
}
function onGeoError() {
  alert("Can't Find your geolocation.");
}
navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);
