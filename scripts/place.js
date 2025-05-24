document.addEventListener("DOMContentLoaded", () => {
    const temperature = document.querySelector("#temp");
    const windSpeed = document.querySelector("#wind");
    const windChill = document.querySelector("#windchill")
    const currentTemp = parseFloat(temperature.textContent);
    const currentWindSpeed = parseFloat(windSpeed.textContent);
    if (currentTemp <= 50 && currentWindSpeed > 3) {
        const chill = 35.74 + (0.6215 * currentTemp) - (35.75 * Math.pow(currentWindSpeed, 0.16)) + (0.4275 * currentTemp * Math.pow(currentWindSpeed, 0.16));
        windChill.textContent = chill.toFixed(2) + "°F";
    }
    else {
        windChill.textContent = "N/A";
    }
}
);
