function refreshWeather(response) {
  // Imprimir los datos de la API para ver qué información recibes
  console.log(response.data);

  // Actualizar el nombre de la ciudad en el HTML
  let cityElement = document.querySelector("#weather-app-city");
  cityElement.innerHTML = response.data.city;

  // Actualizar la temperatura en el HTML
  let temperatureElement = document.querySelector(".weather-app-temperature");
  temperatureElement.innerHTML = Math.round(response.data.temperature.current); // Redondeamos la temperatura
}

function searchCity(city) {
  let apiKey = "4c2d34edtb05a9b0ao32170dd17e08f4";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(refreshWeather);
}

function handleSearchSubmit(event) {
  event.preventDefault(); // Evitar que la página se recargue

  let searchInput = document.querySelector("#search-form-input");
  if (searchInput) {
      let cityName = searchInput.value.trim(); // Obtener el valor del input y eliminar espacios

      // Llamar a la API para buscar el clima de la ciudad
      searchCity(cityName);
  } else {
      console.error("No se encontró el input de búsqueda");
  }
}

let searchFormElement = document.querySelector("#search-form");
if (searchFormElement) {
  searchFormElement.addEventListener("submit", handleSearchSubmit);
} else {
  console.error("No se encontró el formulario de búsqueda");
}
