let weather = {
    "apikey": "aca7dbe2da91763f3c6f768ae2d5f745",
    fetchweather: function (latitude, longtitude) {
        fetch(
            "http://api.openweathermap.org/data/2.5/onecall?lat="
            + latitude + "&lon=" + longtitude
            + "&units=metric&appid="
            + this.apikey
        )
            .then((response) => response.json())
            .then((data) => this.displayweather(data));
    },
    displayweather: function (data) {
        //current weather details
        var name = data['timezone'];
        const { icon, description } = data.current.weather[0];
        const { temp, humidity } = data.current;
        const { wind_speed } = data.current;
        console.log(name, icon, description, temp, humidity, wind_speed)
        document.querySelector(".city").innerHTML = "Weather in " + name;
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp + "°C";
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".wind").innerText = "Wind speed: " + wind_speed + " km/h";

        //forecast weather details
        var d = data['daily'][0]['dt'];
        var date = new Date(d * 1000);
        var months_arr = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        var year = date.getFullYear();
        var month = months_arr[date.getMonth()];
        var day = date.getDate();
        var day1 = data['daily'][0]['temp']['day'];
        var icon1 = data['daily'][0]['weather'][0]['icon'];
        var description1 = data['daily'][0]['weather'][0]['description'];
        var humidity1 = data['daily'][0]['humidity'];
        var wind1 = data['daily'][0]['wind_speed'];
        document.querySelector(".date").innerHTML = day + "-" + month + "-" + year;
        document.querySelector(".temp1").innerHTML = day1 + "°C";
        document.querySelector(".icon1").src = "https://openweathermap.org/img/wn/" + icon1 + ".png";
        document.querySelector(".description1").innerText = description1;
        document.querySelector(".humidity1").innerText = "Humidity: " + humidity1 + "%";
        document.querySelector(".wind1").innerText = "Wind speed: " + wind1 + " km/h";

        var d2 = data['daily'][1]['dt'];
        var date2 = new Date(d2 * 1000);
        var year2 = date2.getFullYear();
        var month2 = months_arr[date2.getMonth()];
        var day2d = date2.getDate();
        var day2 = data['daily'][1]['temp']['day'];
        var icon2 = data['daily'][1]['weather'][0]['icon'];
        var description2 = data['daily'][1]['weather'][0]['description'];
        var humidity2 = data['daily'][1]['humidity'];
        var wind2 = data['daily'][1]['wind_speed'];
        document.querySelector(".date2").innerHTML = day2d + "-" + month2 + "-" + year2;
        document.querySelector(".temp2").innerHTML = day2 + "°C";
        document.querySelector(".icon2").src = "https://openweathermap.org/img/wn/" + icon2 + ".png";
        document.querySelector(".description2").innerText = description2;
        document.querySelector(".humidity2").innerText = "Humidity: " + humidity2 + "%";
        document.querySelector(".wind2").innerText = "Wind speed: " + wind2 + " km/h";

        var d3 = data['daily'][2]['dt'];
        var date3 = new Date(d3 * 1000);
        var year3 = date3.getFullYear();
        var month3 = months_arr[date3.getMonth()];
        var day3d = date3.getDate();
        var day3 = data['daily'][2]['temp']['day'];
        var icon3 = data['daily'][2]['weather'][0]['icon'];
        var description3 = data['daily'][2]['weather'][0]['description'];
        var humidity3 = data['daily'][2]['humidity'];
        var wind3 = data['daily'][2]['wind_speed'];
        document.querySelector(".date3").innerHTML = day3d + "-" + month3 + "-" + year3;
        document.querySelector(".temp3").innerHTML = day3 + "°C";
        document.querySelector(".icon3").src = "https://openweathermap.org/img/wn/" + icon3 + ".png";
        document.querySelector(".description3").innerText = description3;
        document.querySelector(".humidity3").innerText = "Humidity: " + humidity3 + "%";
        document.querySelector(".wind3").innerText = "Wind speed: " + wind3 + " km/h";

        var d4 = data['daily'][3]['dt'];
        var date4 = new Date(d4 * 1000);
        var year4 = date4.getFullYear();
        var month4 = months_arr[date4.getMonth()];
        var day4d = date4.getDate();
        var day4 = data['daily'][3]['temp']['day'];
        var icon4 = data['daily'][3]['weather'][0]['icon'];
        var description4 = data['daily'][3]['weather'][0]['description'];
        var humidity4 = data['daily'][3]['humidity'];
        var wind4 = data['daily'][3]['wind_speed'];
        document.querySelector(".date4").innerHTML = day4d + "-" + month4 + "-" + year4;
        document.querySelector(".temp4").innerHTML = day4 + "°C";
        document.querySelector(".icon4").src = "https://openweathermap.org/img/wn/" + icon4 + ".png";
        document.querySelector(".description4").innerText = description4;
        document.querySelector(".humidity4").innerText = "Humidity: " + humidity4 + "%";
        document.querySelector(".wind4").innerText = "Wind speed: " + wind4 + " km/h";

        var d5 = data['daily'][4]['dt'];
        var date5 = new Date(d5 * 1000);
        var year5 = date5.getFullYear();
        var month5 = months_arr[date5.getMonth()];
        var day5d = date5.getDate();
        var day5 = data['daily'][4]['temp']['day'];
        var icon5 = data['daily'][4]['weather'][0]['icon'];
        var description5 = data['daily'][4]['weather'][0]['description'];
        var humidity5 = data['daily'][4]['humidity'];
        var wind5 = data['daily'][4]['wind_speed'];
        document.querySelector(".date5").innerHTML = day5d + "-" + month5 + "-" + year5;
        document.querySelector(".temp5").innerHTML = day5 + "°C";
        document.querySelector(".icon5").src = "https://openweathermap.org/img/wn/" + icon5 + ".png";
        document.querySelector(".description5").innerText = description5;
        document.querySelector(".humidity5").innerText = "Humidity: " + humidity5 + "%";
        document.querySelector(".wind5").innerText = "Wind speed: " + wind5 + " km/h";

        var d6 = data['daily'][5]['dt'];
        var date6 = new Date(d6 * 1000);
        var year6 = date6.getFullYear();
        var month6 = months_arr[date6.getMonth()];
        var day6d = date6.getDate();
        var day6 = data['daily'][5]['temp']['day'];
        var icon6 = data['daily'][5]['weather'][0]['icon'];
        var description6 = data['daily'][5]['weather'][0]['description'];
        var humidity6 = data['daily'][5]['humidity'];
        var wind6 = data['daily'][5]['wind_speed'];
        document.querySelector(".date6").innerHTML = day6d + "-" + month6 + "-" + year6;
        document.querySelector(".temp6").innerHTML = day6 + "°C";
        document.querySelector(".icon6").src = "https://openweathermap.org/img/wn/" + icon6 + ".png";
        document.querySelector(".description6").innerText = description6;
        document.querySelector(".humidity6").innerText = "Humidity: " + humidity6 + "%";
        document.querySelector(".wind6").innerText = "Wind speed: " + wind6 + " km/h";

        var d7 = data['daily'][6]['dt'];
        var date7 = new Date(d7 * 1000);
        var year7 = date7.getFullYear();
        var month7 = months_arr[date7.getMonth()];
        var day7d = date7.getDate();
        var day7 = data['daily'][6]['temp']['day'];
        var icon7 = data['daily'][6]['weather'][0]['icon'];
        var description7 = data['daily'][6]['weather'][0]['description'];
        var humidity7 = data['daily'][6]['humidity'];
        var wind7 = data['daily'][6]['wind_speed'];
        document.querySelector(".date7").innerHTML = day7d + "-" + month7 + "-" + year7;
        document.querySelector(".temp7").innerHTML = day7 + "°C";
        document.querySelector(".icon7").src = "https://openweathermap.org/img/wn/" + icon7 + ".png";
        document.querySelector(".description7").innerText = description7;
        document.querySelector(".humidity7").innerText = "Humidity: " + humidity7 + "%";
        document.querySelector(".wind7").innerText = "Wind speed: " + wind7 + " km/h";

    },
    search: function () {
        this.fetchweather(document.querySelector(".searchbar").value, document.querySelector(".searchbar2").value);

    }
};

document.querySelector(".search button").addEventListener("click", function () {
    weather.search()
})

document.querySelector(".searchbar").addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
        weather.search();
    }
})

document.querySelector(".searchbar2").addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
        weather.search();
    }
})

weather.fetchweather(6.9319, 79.8478);