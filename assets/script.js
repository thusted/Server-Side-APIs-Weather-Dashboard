$(document).ready(function() {

const apiKey = "4de73193406a7f35e8b27fe430465b0a";
let cities = [];

function searchForCity(cityName) {
    let queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + apiKey;

    //AJAX call for current day
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response){
        console.log(response);
        
        let city = response.name;

        let date = new Date(response.dt * 1000).toLocaleDateString("en-US");

        $("#currentCity").text(city + " " + "(" + date + ")");

        let kTemp = response.main.temp;
        let fTemp = (kTemp - 273.15) * 1.80 + 32;
        $("#currentTemp").text("Temperature: " + fTemp.toFixed(2) + " °F");

        let humidity = response.main.humidity;
        $("#currentHumidity").text("Humidity: " + humidity + "%");

        let windSpeed = response.wind.speed;
        $("#currentWind").text("Wind Speed: " + windSpeed + " MPH");

        let weatherConditions = response.weather[0].main;

        $("#weatherIcon").removeClass("fa fa-cloud");
        $("#currentSearch").removeClass("clouds");
        $("#weatherIcon").removeClass("fa fa-sun");
        $("#currentSearch").removeClass("clear");
        $("#weatherIcon").removeClass("fas fa-cloud-rain");
        $("#currentSearch").removeClass("rain");

        if(weatherConditions === "Clouds"){
            $("#weatherIcon").addClass("fa fa-cloud");
            $("#currentSearch").addClass("clouds");
        };

        if(weatherConditions === "Clear"){
            $("#weatherIcon").addClass("fa fa-sun");
            $("#currentSearch").addClass("clear");

        };

        if(weatherConditions === "Rain"){
            $("#weatherIcon").addClass("fas fa-cloud-rain");
            $("#currentSearch").addClass("rain");
        };
    });

    let queryURLForecast = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&appid=" + apiKey;

    //AJAX call for 5-day forecast
    $.ajax({
        url: queryURLForecast,
        method: "GET"
    }).then(function(response){
        //Day 1 Date
        let day1 = new Date(response.list[1].dt * 1000).toLocaleDateString("en-US");
        $("#day1").text("(" + day1 + ")");

        //Day 1 Icon and Background
        let day1WeatherCondition = response.list[1].weather[0].main;

        $("#weatherIcon1").removeClass("fa fa-cloud");
        $("#day1Body").removeClass("clouds");
        $("#weatherIcon1").removeClass("fa fa-sun");
        $("#day1Body").removeClass("clear");
        $("#weatherIcon1").removeClass("fas fa-cloud-rain");
        $("#day1Body").removeClass("rain");

        if(day1WeatherCondition === "Clouds"){
            $("#weatherIcon1").addClass("fa fa-cloud");
            $("#day1Body").addClass("clouds");
        };

        if(day1WeatherCondition === "Clear"){
            $("#weatherIcon1").addClass("fa fa-sun");
            $("#day1Body").addClass("clear");

        };

        if(day1WeatherCondition === "Rain"){
            $("#weatherIcon1").addClass("fas fa-cloud-rain");
            $("#day1Body").addClass("rain");
        };

        //Day 1 Temp
        let kTemp1 = response.list[1].main.temp;
        let fTemp1 = (kTemp1 - 273.15) * 1.80 + 32;
        $("#day1Temp").text("Temperature: " + fTemp1.toFixed(2) + " °F");

        //Day 1 Humidity
        let humidity1 = response.list[1].main.humidity;
        $("#day1Humidity").text("Humidity: " + humidity1 + "%");
        
        //Day 2 Date
        let day2 = new Date(response.list[9].dt * 1000).toLocaleDateString("en-US");
        $("#day2").text("(" + day2 + ")");
33
        //Day 2 Icon and Background
        let day2WeatherCondition = response.list[9].weather[0].main;

        $("#weatherIcon2").removeClass("fa fa-cloud");
        $("#day2Body").removeClass("clouds");
        $("#weatherIcon2").removeClass("fa fa-sun");
        $("#day2Body").removeClass("clear");
        $("#weatherIcon2").removeClass("fas fa-cloud-rain");
        $("#day2Body").removeClass("rain");

        if(day2WeatherCondition === "Clouds"){
            $("#weatherIcon2").addClass("fa fa-cloud");
            $("#day2Body").addClass("clouds");
        };

        if(day2WeatherCondition === "Clear"){
            $("#weatherIcon2").addClass("fa fa-sun");
            $("#day2Body").addClass("clear");

        };

        if(day2WeatherCondition === "Rain"){
            $("#weatherIcon2").addClass("fas fa-cloud-rain");
            $("#day2Body").addClass("rain");
        };

        //Day 2 Temp
        let kTemp2 = response.list[9].main.temp;
        let fTemp2 = (kTemp2 - 273.15) * 1.80 + 32;
        $("#day2Temp").text("Temperature: " + fTemp2.toFixed(2) + " °F");

        //Day 2 Humidity
        let humidity2 = response.list[9].main.humidity;
        $("#day2Humidity").text("Humidity: " + humidity2 + "%");

        //Day 3 Date
        let day3 = new Date(response.list[17].dt * 1000).toLocaleDateString("en-US");
        $("#day3").text("(" + day3 + ")");

        //Day 3 Icon and Background
        let day3WeatherCondition = response.list[17].weather[0].main;

        $("#weatherIcon3").removeClass("fa fa-cloud");
        $("#day3Body").removeClass("clouds");
        $("#weatherIcon3").removeClass("fa fa-sun");
        $("#day3Body").removeClass("clear");
        $("#weatherIcon3").removeClass("fas fa-cloud-rain");
        $("#day3Body").removeClass("rain");

        if(day3WeatherCondition === "Clouds"){
            $("#weatherIcon3").addClass("fa fa-cloud");
            $("#day3Body").addClass("clouds");
        };

        if(day3WeatherCondition === "Clear"){
            $("#weatherIcon3").addClass("fa fa-sun");
            $("#day3Body").addClass("clear");

        };

        if(day3WeatherCondition === "Rain"){
            $("#weatherIcon3").addClass("fas fa-cloud-rain");
            $("#day3Body").addClass("rain");
        };

        //Day 3 Temp
        let kTemp3 = response.list[17].main.temp;
        let fTemp3 = (kTemp1 - 273.15) * 1.80 + 32;
        $("#day3Temp").text("Temperature: " + fTemp3.toFixed(2) + " °F");

        //Day 3 Humidity
        let humidity3 = response.list[17].main.humidity;
        $("#day3Humidity").text("Humidity: " + humidity3 + "%");

        //Day 4 Date
        let day4 = new Date(response.list[25].dt * 1000).toLocaleDateString("en-US");
        $("#day4").text("(" + day4 + ")");

        //Day 4 Icon and Background
        let day4WeatherCondition = response.list[25].weather[0].main;

        $("#weatherIcon4").removeClass("fa fa-cloud");
        $("#day4Body").removeClass("clouds");
        $("#weatherIcon4").removeClass("fa fa-sun");
        $("#day4Body").removeClass("clear");
        $("#weatherIcon4").removeClass("fas fa-cloud-rain");
        $("#day4Body").removeClass("rain");

        if(day4WeatherCondition === "Clouds"){
            $("#weatherIcon4").addClass("fa fa-cloud");
            $("#day4Body").addClass("clouds");
        };

        if(day4WeatherCondition === "Clear"){
            $("#weatherIcon4").addClass("fa fa-sun");
            $("#day4Body").addClass("clear");

        };

        if(day4WeatherCondition === "Rain"){
            $("#weatherIcon4").addClass("fas fa-cloud-rain");
            $("#day4Body").addClass("rain");
        };

        //Day 4 Temp
        let kTemp4 = response.list[25].main.temp;
        let fTemp4 = (kTemp1 - 273.15) * 1.80 + 32;
        $("#day4Temp").text("Temperature: " + fTemp4.toFixed(2) + " °F");

        //Day 4 Humidity
        let humidity4 = response.list[25].main.humidity;
        $("#day4Humidity").text("Humidity: " + humidity4 + "%");

        //Day 5 Date
        let day5 = new Date(response.list[33].dt * 1000).toLocaleDateString("en-US");
        $("#day5").text("(" + day5 + ")");

        //Day 5 Icon and Background
        let day5WeatherCondition = response.list[33].weather[0].main;

        $("#weatherIcon5").removeClass("fa fa-cloud");
        $("#day5Body").removeClass("clouds");
        $("#weatherIcon5").removeClass("fa fa-sun");
        $("#day5Body").removeClass("clear");
        $("#weatherIcon5").removeClass("fas fa-cloud-rain");
        $("#day5Body").removeClass("rain");

        if(day5WeatherCondition === "Clouds"){
            $("#weatherIcon5").addClass("fa fa-cloud");
            $("#day5Body").addClass("clouds");
        };

        if(day5WeatherCondition === "Clear"){
            $("#weatherIcon5").addClass("fa fa-sun");
            $("#day5Body").addClass("clear");

        };

        if(day5WeatherCondition === "Rain"){
            $("#weatherIcon5").addClass("fas fa-cloud-rain");
            $("#day5Body").addClass("rain");
        };

        //Day 5 Temp
        let kTemp5 = response.list[33].main.temp;
        let fTemp5 = (kTemp1 - 273.15) * 1.80 + 32;
        $("#day5Temp").text("Temperature: " + fTemp5.toFixed(2) + " °F");

        //Day 5 Humidity
        let humidity5 = response.list[33].main.humidity;
        $("#day5Humidity").text("Humidity: " + humidity5 + "%");
    });
};
    
// function alertCityName() {
//     var selectedCity = $(this).attr("id");
//     alert(selectedCity);
// };
    
function renderButtons(){
    $("#buttonsDisplay").empty();

    for (var i = 0; i < cities.length; i++){
        var recentCityButton = $("<button>");

        recentCityButton.addClass("btn btn-secondary cities");

        recentCityButton.attr("id", cities[i]);

        recentCityButton.text(cities[i]);

        $("#buttonsDisplay").append(recentCityButton);

        console.log(recentCityButton);
    };
};
    
$("#searchBtn").click(function(e) {
    e.preventDefault();

    searchForCity($("#inputCity").val());

    let mostRecentCity = $("#inputCity").val();

    cities.push(mostRecentCity);

    renderButtons();
});

$(document).on("click", ".cities", function(){
    var selectedCity = $(this).attr("id");
    console.log(selectedCity);
    searchForCity(selectedCity);
});

//var recentCities = JSON.parse(localStorage.getItem("recentCities")) || [];

// $("button").click(function(){
//    // e.preventDefault();

//     console.log("HI");

//     alertCityName();

    //let selectedCitys = $(this).attr("id");

    //console.log(selectedCitys);

    //let cityName = $(this).children().attr("id");

    // for(var i = 0; i < selectedCitys.length; i++){
    //     let storedCity = selectedCitys[i];

    //     console.log(storedCity);
    // }
    

    //console.log(cityName);

    //searchForCity(cityName);


    

    // for (var i = 0; i < recentCities.length; i++){
    //     if(recentCities[i] === cityName) {
    //         searchForCity(cityName);
    //     }; 
    // };

});

