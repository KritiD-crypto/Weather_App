const search = document.querySelector(".searchbtn");
const cityinput = document.querySelector(".searchinput")

search.addEventListener("click", (event) =>{
    console.log("Search button clicked.");
    const cityName = cityinput.value.trim();
    // console.log(cityName);
     if (cityName === "") {
    alert("Please enter a city name.");
  } else {
    getWeather(cityName);
  }
});


const apiKey = "b6ceb9b2261db23ee02cf5cf0d173179";
const getWeather = async (cityName) => {
    console.log("City Name is",cityName);
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;
    console.log("API URL:", apiUrl);
    let response = await fetch(apiUrl);
    
    if(response.ok === false){
        alert("City not found!. Please try again.");
    }
    console.log(response);
    let data = await response.json();
    console.log(data);

    const tempElement = document.querySelector(".tempElement");
    const temp= data.main.temp;
    tempElement.innerText = `${Math.round(temp)}°C`;
    console.log("Temperature:", temp);

    const city = document.querySelector(".cityname");
    const cityname = data.name;
    city.innerText = `${cityName}`;

    const condn = document.querySelector(".condition");
    const condition = data.weather[0].main;
    condn.innerText = `${condition}`;

    const hum = document.querySelector(".humidity");
    const humidity = data.main.humidity;
    hum.innerText = `${humidity}%`;

    const speed = document.querySelector(".speed");
    const sp = data.wind.speed;
    speed.innerText = `${sp} km/h`;
};
