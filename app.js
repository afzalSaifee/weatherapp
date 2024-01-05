const url="https://api.weatherapi.com/v1/current.json?key=fa5ddd3ff5e0405f8ab111938240401&q=";

const searchBox=document.querySelector(".search input");
const searchbtn=document.querySelector(".search button");
const weathericon = document.querySelector(".weather-icon")

 async function checkweather(city){
    let res= await fetch(url+city);
  
    let data =await res.json();
   
    console.log(data);

    document.querySelector(".city").innerHTML=data.location.name;
    document.querySelector(".temp").innerHTML=Math.round(data.current.temp_c)  +"°C";
    document.querySelector(".humidity").innerHTML=data.current.humidity +"%";
    document.querySelector(".wind").innerHTML=data.current.wind_kph + "km/h";

    if(data.current.condition.text == "Clouds"){
        weathericon.src ="images/clouds.png";
    }
   else if(data.current.condition.text == "Clear"){
        weathericon.src ="images/clear.png";
    }
   else if(data.current.condition.text == "Rain"){
        weathericon.src ="images/rain.png";
    }
   else if(data.current.condition.text == "Drizzle"){
        weathericon.src ="images/drizzle.png";
    }
   else if(data.current.condition.text == "Mist"){
        weathericon.src ="images/mist.png";
    }

    document.querySelector(".weather").style.display ="block";
}
searchbtn.addEventListener("click",()=>{
    checkweather(searchBox.value);
})

