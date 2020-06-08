const apiKey = "4de73193406a7f35e8b27fe430465b0a";

function searchForCity() {
    $("#searchBtn").click(function(e) {
        e.preventDefault();

        let userInputCity = $("#inputCity").val();

        console.log(userInputCity);

        let queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + userInputCity + "&appid=" + apiKey;

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response){
            console.log(response);
            
            let city = response.name;
            $("#currentCity").text(city);

            let kTemp = response.main.temp;
            let fTemp = (kTemp - 273.15) * 1.80 + 32;
            $("#currentTemp").text("Temperature: " + fTemp.toFixed(2) + " °F");

            let humidity = response.main.humidity;
            $("#currentHumidity").text("Humidity: " + humidity + "%");

            let windSpeed = response.wind.speed;
            $("#currentWind").text("Wind Speed: " + windSpeed + " MPH");
        });
    });
};

searchForCity();

