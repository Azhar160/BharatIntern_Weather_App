let apikey = "f275f5c3ea5c33c894c206a06ecf205d";

let apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

let searchcity = document.querySelector(".search-city");
let btn = document.querySelector(".btn");

let weatherimg = document.querySelector(".weather-image");

async function weather(search)
{
    const response = await fetch(apiurl + search + `&appid=${apikey}`);
    var data = await response.json();
    console.log(data);

    document.querySelector('.city-add').innerHTML = data.name;
    document.querySelector('.city-temp').innerHTML = Math.floor(data.main.temp) + "°C";

    if(data.weather[0].main == "Clouds")
        {
            weatherimg.src = "assets/img/cloud.png";
        }
        else if(data.weather[0].main == "Clear")
        {
            weatherimg.src = "assets/img/clear.png";
        }else if(data.weather[0].main == "Haze")
            {
                weatherimg.src = "assets/img/haze.png";
            }else if(data.weather[0].main == "Rain")
                {
                    weatherimg.src = "assets/img/rain.jfif";
                }

        document.querySelector(".city").style.display = "block"; 
}

btn.addEventListener("click" , ()=>
    {
        weather(searchcity.value);
    })



