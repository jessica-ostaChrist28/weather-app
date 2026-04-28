from flask import Blueprint, render_template, request, jsonify
from app.services import get_weather

main_bp = Blueprint('main', __name__)

@main_bp.route('/')
def index():
    return render_template('index.html')

@main_bp.route('/api/weather', methods=['GET'])
def weather():
    city = request.args.get('city', 'London')
    weather_data = get_weather(city)
    return jsonify(weather_data)
