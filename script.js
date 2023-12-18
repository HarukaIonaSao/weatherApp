const apiKey = "c82cebd116b88923f5ef4f00d47b45dd";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const searchBox= document.querySelector(".search input")
const searchBtn= document.querySelector(".search button")
const weatherIcon = document.querySelector(".weather_icon")

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if(response.status == 404){
        document.querySelector(".error").style.display ="block"
        document.querySelector(".weather").style.display ="none"
    }else{
        var data = await response.json();

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML =Math.round(data.main.temp)  + "°c";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed +"km/h";
    
        if(data.weather[0].main == "Clouds"){
            weatherIcon.src = "img/nuvem.png"
        }
        else if(data.weather[0].main == "Clear"){
            weatherIcon.src = "img/sol.png"
    }
    else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "./img/nebuloso.png"
    }
    else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "./img/chuvisco.png"
    }
    else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "./img/nevoa.png"
    }
    // console.log(data)
    document.querySelector(".weather").style.display
    ="block"
    document.querySelector(".error").style.display
    ="none"
}
    }
  

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value)
})

