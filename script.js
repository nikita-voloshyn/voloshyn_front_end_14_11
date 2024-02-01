document.addEventListener('DOMContentLoaded', function () {
    getCities();

    document.getElementById('cities').addEventListener('change', function () {
        getWeather();
    });
});

var ukraineCities = ['Kyiv', 'Kharkiv', 'Odesa', 'Dnipro', 'Lviv', 'Zaporizhia', 'Kryvyi Rih', 'Mykolaiv', 'Mariupol', 'Luhansk'];

function getCities() {
    var citiesSelect = document.getElementById('cities');
    ukraineCities.forEach(function (city) {
        var option = document.createElement('option');
        option.value = city;
        option.text = city;
        citiesSelect.add(option);
    });

    getWeather();
}

function getWeather() {
    var selectedCity = document.getElementById('cities').value;
    var apiUrl = 'http://api.openweathermap.org/data/2.5/weather?q=' + selectedCity + ',ua&units=metric&APPID=5d066958a60d315387d9492393935c19';

    var xhr = new XMLHttpRequest();
    xhr.open('GET', apiUrl, true);

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var weatherData = JSON.parse(xhr.responseText);
            var temperature = weatherData.main.temp;
            var pressure = weatherData.main.pressure;
            var description = weatherData.weather[0].description;
            var humidity = weatherData.main.humidity;
            var windSpeed = weatherData.wind.speed;
            var windDirection = weatherData.wind.deg;
            var iconCode = weatherData.weather[0].icon;

            document.getElementById('weather-info').innerHTML =
                '<div class="card">' +
                    '<div class="card-body">' +
                        '<h5 class="card-title">Погода в місті ' + selectedCity + '</h5>' +
                        '<p class="card-text">Температура: ' + temperature + '°C</p>' +
                        '<p class="card-text">Тиск: ' + pressure + ' hPa</p>' +
                        '<p class="card-text">Опис: ' + description + '</p>' +
                        '<p class="card-text">Вологість: ' + humidity + '%</p>' +
                        '<p class="card-text">Швидкість вітру: ' + windSpeed + ' м/с</p>' +
                        '<p class="card-text">Напрям вітру: ' + windDirection + ' градусів</p>' +
                        '<img src="http://openweathermap.org/img/w/' + iconCode + '.png" class="img-fluid" alt="Погодний значок">' +
                    '</div>' +
                '</div>';
        }
    };

    xhr.send();
}
