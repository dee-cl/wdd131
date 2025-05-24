document.addEventListener("DOMContentLoaded", () => {
    const temperature = document.querySelector("#temp");
    const windSpeed = document.querySelector("#wind");
    const windChill = document.querySelector("#windchill");
    const currentTemp = parseFloat(temperature.textContent);
    const currentWindSpeed = parseFloat(windSpeed.textContent);
    
    if (currentTemp <= 50 && currentWindSpeed > 3) {
            windChill.textContent = calculateWindChill(currentTemp, currentWindSpeed);
        } else {
            windChill.textContent = "N/A";
        }
    
    function calculateWindChill(currentTemp, currentWindSpeed) {
        return (35.74 + 0.6215 * currentTemp - 35.75 * Math.pow(currentWindSpeed, 0.16) + 0.4275 * currentTemp * Math.pow(currentWindSpeed, 0.16)).toFixed(2) + "°F";
    }
    
});