function searchCity(city) {
  const apiKey = '4c2d34edtb05a9b0ao32170dd17e08f4'; // Reemplaza con tu clave de API
  const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;

  axios.get(apiUrl)
    .then(response => {
      // Procesa los datos recibidos
      const temperature = response.data.current.temperature; // Temperatura en grados Celsius
      const unit = '°C'; // Aquí puedes cambiar la unidad si es necesario
      const description = response.data.current.condition.description;
      const cityElement = document.querySelector("#weather-app-city");
      const tempElement = document.querySelector("#weather-app-temperature");

      // Actualiza los elementos de la interfaz
      cityElement.innerHTML = `${city}`;
      tempElement.innerHTML = `${temperature}${unit} - ${description}`;
    })
    .catch(error => {
      console.error('Error:', error);
      const cityElement = document.querySelector("#weather-app-city");
      const tempElement = document.querySelector("#weather-app-temperature");
      cityElement.innerHTML = "No se pudo obtener el clima.";
      tempElement.innerHTML = ""; // Limpia la temperatura mostrada
    });
}

function handleSearchSubmit(event) {
  event.preventDefault(); // Evitar que la página se recargue

  let searchInput = document.querySelector("#search-form-input");
  if (searchInput) {
      let cityName = searchInput.value.trim(); // Obtener el valor del input y eliminar espacios
      if (cityName) {
          searchCity(cityName); // Llamar a la función searchCity
      } else {
          console.error("Ciudad no encontrada");
      }
  } else {
      console.error("No se encontró el input de búsqueda");
  }
}