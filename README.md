# Weather App

A simple Flask-based weather application that displays real-time weather information for any city using the OpenWeatherMap API.

## Features

- 🌤️ Real-time weather data
- 🔍 Search weather by city name
- 📊 Display temperature, humidity, wind speed, pressure, and cloudiness
- 📱 Responsive design
- 🎨 Modern UI with gradient background

## Project Structure

```
weather-app/
├── app/
│   ├── __init__.py          # Flask app initialization
│   ├── routes.py            # Route handlers
│   └── services.py          # Weather API service
├── static/
│   ├── style.css            # Stylesheet
│   └── script.js            # Frontend JavaScript
├── templates/
│   └── index.html           # HTML template
├── .env                     # Environment variables
├── .gitignore               # Git ignore file
├── requirements.txt         # Python dependencies
├── run.py                   # Application entry point
└── README.md                # This file
```

## Prerequisites

- Python 3.7+
- pip (Python package installer)

## Installation

1. Clone the repository or navigate to the project directory
2. Install required packages:

   ```bash
   pip install -r requirements.txt
   ```

3. Set up environment variables in `.env`:

   ```
   API_KEY=your_openweathermap_api_key_here
   FLASK_ENV=development
   FLASK_DEBUG=True
   ```

   Get your API key from [OpenWeatherMap](https://openweathermap.org/api)

## Running the Application

1. Start the Flask development server:

   ```bash
   python run.py
   ```

2. Open your browser and navigate to:
   ```
   http://localhost:5000
   ```

## Usage

1. Enter a city name in the search box
2. Click "Search" or press Enter
3. View the weather information displayed on the page

## Dependencies

- **Flask**: Web framework
- **requests**: HTTP library for API calls
- **python-dotenv**: Environment variable management

See `requirements.txt` for full list of dependencies.

## API Used

- [OpenWeatherMap API](https://openweathermap.org/api) - Current Weather Data

## License

This project is open source and available under the MIT License.
