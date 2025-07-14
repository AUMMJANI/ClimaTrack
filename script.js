$(document).ready(function () {
    $('#search-btn').click(function () {
        const city = $('#city').val().trim();

        if (city === '') {
            alert('Please enter a city name');
            return;
        }

        $.ajax({
            url: 'weather.php',
            type: 'GET',
            data: { city: city },
            success: function (response) {
                try {
                    const data = JSON.parse(response);

                    if (data.cod === 200) {
                        const iconCode = data.weather[0].icon;
                        const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

                        const html = `
              <img src="${iconUrl}" alt="weather icon" style="width: 80px; height: 80px;" />
              <span><strong>${data.name}, ${data.sys.country}</strong></span>
              <span>${data.weather[0].main} - ${data.weather[0].description}</span>
              <span>🌡 Temp: ${data.main.temp}°C</span>
              <span>💧 Humidity: ${data.main.humidity}%</span>
              <span>🌬 Wind: ${data.wind.speed} m/s</span>
            `;
                        $('#weatherResult').html(html);
                    } else {
                        $('#weatherResult').html(`<span>${data.message}</span>`);
                    }
                } catch (err) {
                    $('#weatherResult').html(`<span>Unexpected error occurred. Try again.</span>`);
                }
            },
            error: function () {
                $('#weatherResult').html(`<span>API request failed. Please try again later.</span>`);
            }
        });
    });
});
