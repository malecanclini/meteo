function updateWeather(response) {
    let temperatureElement = document.querySelector("#temperature");
    let temperature = response.data.temperature.current;
  
    let cityElement = document.querySelector("#city");
    cityElement.innerHTML = response.data.city;
    temperatureElement.innerHTML = Math.round(temperature);
  }
  
  function searchCity(city) {
    let apiKey = "4c2d34edtb05a9b0ao32170dd17e08f4";
    let apiUrl =
      `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
    axios.get(apiUrl).then(updateWeather);
  }
  
  function handleSearchSubmit(event) {
    event.preventDefault();
    let searchInput = document.querySelector("#search-form-input");
    let cityElement = document.querySelector("#city");
    cityElement.innerHTML = searchInput.value;
    searchCity(searchInput.value);
  }
  
  let searchFormElement = document.querySelector("#search-form");
  searchFormElement.addEventListener("submit", handleSearchSubmit);