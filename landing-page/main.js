document
  .getElementById("load-weather-app")
  .addEventListener("click", function () {
    const container = document.getElementById("weather-app-container");
    document.getElementById("weather-details").innerHTML = "";
    container.innerHTML =
      '<iframe src="https://weather-app-910511071.web.app/weather/" allow="geolocation" width="100%" height="600px" frameborder="0"></iframe>';
  });

// Function to display weather details from localStorage
function displayWeatherDetails() {
  const weatherDetails = JSON.parse(localStorage.getItem("weatherDetails"));
  if (weatherDetails) {
    document.getElementById("weather-details").innerHTML = `
            <p>Location: ${weatherDetails.location}</p>
            <p>Temperature: ${weatherDetails.temperature}°C</p>
            <p>Last Updated: ${new Date(weatherDetails.lastUpdated)}</p>
        `;
  }
}

displayWeatherDetails();
