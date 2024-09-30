function handleSearchSubmit(event) {
  event.preventDefault(); // Evitar que la página se recargue

  let searchInput = document.querySelector("#search-form-input");
  let cityElement = document.querySelector("#weather-app-city");

  if (searchInput && cityElement) {
      let cityName = searchInput.value.trim(); // Obtener el valor del input y eliminar espacios
      cityElement.innerHTML = cityName || "Ciudad no encontrada"; // Cambiar el nombre de la ciudad
  } else {
      console.error("No se encontró el input de búsqueda o el elemento de la ciudad");
  }
}

let searchFormElement = document.querySelector("#search-form");
if (searchFormElement) {
  searchFormElement.addEventListener("submit", handleSearchSubmit);
} else {
  console.error("No se encontró el formulario de búsqueda");
}