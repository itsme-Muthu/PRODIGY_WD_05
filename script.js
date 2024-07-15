const apiKey = "c84b46d98dcbaf0ddacba526e81c71af";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

async function checkWeather(city){
    const response = await fetch(apiUrl +  city+ `&appid=${apiKey}`);

    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    } else{
        var data = await response.json();

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/hr";

        if(data.main.temp<0){
            document.querySelector(".condition").innerHTML = "Snow";
            document.querySelector(".weather-icon").src="images/Snow.png";
        } else{
            document.querySelector(".condition").innerHTML = data.weather[0].main;
            document.querySelector(".weather-icon").src="images/"+data.weather[0].main+".png";
        }
    
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }    
}
searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})
