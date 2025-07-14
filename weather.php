<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

if (isset($_GET['city'])) {
    $city = urlencode($_GET['city']);
    $apiKey = "df14b1afb8e0dc08fd664f9f461554c0";  // 🔁 Replace this with your real API key
    $url = "https://api.openweathermap.org/data/2.5/weather?q=$city&appid=$apiKey&units=metric";

    $response = file_get_contents($url);

    if ($response === FALSE) {
        echo json_encode(["cod" => 500, "message" => "Failed to fetch weather data."]);
    } else {
        echo $response;
    }
} else {
    echo json_encode(["cod" => 400, "message" => "City not provided"]);
}
