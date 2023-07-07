document.addEventListener("DOMContentLoaded", () => {
    const apikey = "facca59aaf6429803a0a3b974b7bc9fb";
    const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="; 

    const searchbox = document.querySelector(".search input");
    const searchbtn = document.querySelector(".search button");

    async function checkweather(city) {
        const response = await fetch(apiurl + city + `&appid=${apikey}`);
        const data = await response.json();
        console.log(data);

        if (data.cod === "404") {
            alert("City or country not found. Please enter a valid location.");
            return;
        }

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
    }

    searchbtn.addEventListener("click", () => {
        checkweather(searchbox.value);
    });
});
