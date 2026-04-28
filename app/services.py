import os
import requests
from dotenv import load_dotenv

load_dotenv()

API_KEY = os.getenv('API_KEY')
BASE_URL = 'https://api.openweathermap.org/data/2.5/weather'

def get_weather(city):
    """
    Fetch weather data for a given city.
    
    Args:
        city (str): City name
        
    Returns:
        dict: Weather data
    """
    try:
        params = {
            'q': city,
            'appid': API_KEY,
            'units': 'metric'
        }
        response = requests.get(BASE_URL, params=params)
        response.raise_for_status()
        return response.json()
    except requests.exceptions.RequestException as e:
        return {'error': str(e)}
