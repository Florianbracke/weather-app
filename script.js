
let array = [];

function getWeather(){
 //variables   
cityName = document.querySelector(".city").value;
const key = "e83c0d271e5edc4f99d6d218e446d655"; 
let api = `http://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${key}`;

console.log(array)
//set current date

console.log(cityName)
fetch(api)
    .then(response => response.json())
        .then(data => {
            let date = data.list[Number(array.length)].dt_txt
            let temperatureNow = (data.list[Number(array.length)].main.temp -273);
            let cloudsNow = (data.list[Number(array.length)].clouds.all);
            let windspeedNow = (data.list[Number(array.length)].main.temp_max - 273);
            let rain
                document.getElementsByTagName("img").src = "sun"
                document.getElementById("date").innerHTML = "Weather for "+ cityName +  " at " +date;
                document.getElementById("temperatureNow").innerHTML = "Outside temperature is " + "<strong>" + temperatureNow.toFixed(2) + " </strong>"+ "°C!";
                // if (temperatureNow > 15){document.querySelector()}
                document.getElementById("cloudsNow").innerHTML ="The sky is covered for " + "<strong>"+cloudsNow +"</strong>"+ "% with clouds." ;
                document.getElementById("windspeedNow").innerHTML ="You can expect windspeed at " + "<strong>"+(windspeedNow *3.6).toFixed(2) +"</strong> km/h";

                console.log(data)
                if (array.length > 39) {
                    location.reload()
                }
        } )
 }
 console.log(array.length)
function addThreeHours(){
    cityName = document.querySelector(".city").value;
    console.log(cityName);
    array.push("threehours"); 
    if (array.length > 0) {
     return getWeather()
    }
}
