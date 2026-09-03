async function getWeather() {
  let location = document.getElementById("locationInput").value.trim();
  const apiKey = "1b145a7ce91e4ea8bd9155404260209"; 
  const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&aqi=yes`;

  // Prevent country-only searches
  if (location.toLowerCase() === "india") {
    document.getElementById("weatherResult").innerHTML = 
      `<p style="color:red;">Please enter a city in India (e.g., Delhi, Mumbai, Lucknow).</p>`;
    return;
  }

  if (!location) {
    document.getElementById("weatherResult").innerHTML = 
      `<p style="color:red;">Please enter a location first!</p>`;
    return;
  }

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.error) {
      document.getElementById("weatherResult").innerHTML = `<p style="color:red;">${data.error.message}</p>`;
      return;
    }

    const weatherHTML = `
      <h2>${data.location.name}, ${data.location.country}</h2>
      <p>🌡 Temperature: ${data.current.temp_c}°C</p>
      <p>☁ Condition: ${data.current.condition.text}</p>
      <p>💨 Wind: ${data.current.wind_kph} kph</p>
      <p>💧 Humidity: ${data.current.humidity}%</p>
      <img src="${data.current.condition.icon}" alt="Weather icon">
    `;

    document.getElementById("weatherResult").innerHTML = weatherHTML;
  } catch (error) {
    document.getElementById("weatherResult").innerHTML = `<p style="color:red;">Failed to fetch weather data.</p>`;
  }
}

// Refresh button logic
document.getElementById("refresh-btn").addEventListener("click", () => {
  // Clear input field
  document.getElementById("locationInput").value = "";
  // Reset weather result to initial state
  document.getElementById("weatherResult").innerHTML = "<p>Enter a location to see the weather 🌍</p>";
});
