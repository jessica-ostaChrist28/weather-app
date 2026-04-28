document.getElementById('searchBtn').addEventListener('click', fetchWeather);
document.getElementById('cityInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        fetchWeather();
    }
});

function fetchWeather() {
    const city = document.getElementById('cityInput').value.trim();
    
    if (!city) {
        showError('Please enter a city name');
        return;
    }
    
    fetch(`/api/weather?city=${encodeURIComponent(city)}`)
        .then(response => response.json())
        .then(data => {
            if (data.error) {
                showError(data.error);
            } else {
                displayWeather(data);
                hideError();
            }
        })
        .catch(error => {
            showError('Failed to fetch weather data');
            console.error('Error:', error);
        });
}

function displayWeather(data) {
    const { name, main, weather, wind, clouds } = data;
    
    document.querySelector('.city-name').textContent = name;
    document.querySelector('.temperature').textContent = `${Math.round(main.temp)}°C`;
    document.querySelector('.description').textContent = weather[0].description;
    
    document.getElementById('humidity').textContent = `${main.humidity}%`;
    document.getElementById('windSpeed').textContent = `${wind.speed} m/s`;
    document.getElementById('pressure').textContent = `${main.pressure} hPa`;
    document.getElementById('cloudiness').textContent = `${clouds.all}%`;
    
    document.querySelector('.weather-info').classList.add('show');
}

function showError(message) {
    const errorDiv = document.querySelector('.error');
    errorDiv.textContent = message;
    errorDiv.classList.add('show');
}

function hideError() {
    document.querySelector('.error').classList.remove('show');
}

// Fetch weather for default city on load
window.addEventListener('load', function() {
    document.getElementById('cityInput').value = 'London';
    fetchWeather();
});
