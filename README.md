# 🌤 ClimaTrack - Weather App

ClimaTrack is a clean, responsive weather web app built using HTML, CSS, JavaScript (jQuery), PHP, and AJAX. It fetches real-time weather data from the [OpenWeatherMap API](https://openweathermap.org/api) based on city input and presents key details like temperature, weather condition, humidity, and wind speed.

---

## 🌟 Features

- 🔍 Search weather by city name
- 🌐 Live weather data using OpenWeatherMap API
- 🌡 Displays temperature, humidity, wind speed, and weather condition
- 🎨 Weather-based background effects (rain, clear, snow, clouds, etc.)
- 🧊 Glassmorphism UI with modern CSS styling
- ⚡ Smooth, asynchronous data fetch using AJAX (no page reload)
- ❌ Handles errors like invalid city names or failed API calls


---

## 🛠️ Tech Stack

- **Frontend**: HTML, CSS, JavaScript (jQuery)
- **Backend**: PHP
- **API**: OpenWeatherMap
- **AJAX**: For async API requests
- **UI**: Custom CSS with modern glass card design

---

## 🚀 How to Run Locally

1. Clone or download the repository
2. Place it inside your XAMPP/WAMP `htdocs` folder
3. Start Apache (and MySQL if needed)
4. Visit: http://localhost/ClimaTrack/
5. Search for any city to get real-time weather

---

## ⚙️ Setup

1. Create an account at [OpenWeatherMap](https://openweathermap.org/)
2. Generate an API key
3. Open `weather.php` and replace:

```php
$apiKey = "YOUR_API_KEY_HERE"; // with your actual API key.
