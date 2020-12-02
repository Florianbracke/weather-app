
{/* <p id="date"></p>    
    <p id="temperature"></p>
    <p id="feelslike"></p>
    <p id="minimumtemperature"></p>
    <p id="maximumtemperature"></p>
    <p id="humidity"></p>
    <p id="clouds"></p>
    <p id="rain"></p>
    <p id="visibility"></p> 
    <p id="rain"></p>list.slice(0, 3)
    <p id="wind"></p */}

function getWeather(){

const key = "e83c0d271e5edc4f99d6d218e446d655"; 
let cityName = "gent";
let api = `http://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${key}`;

fetch(api)
    .then(response => response.json())
        .then(data => {
                let dateMorning = data.list[0].dt_txt
                let temperatureMorning = (Math.floor(data.list[0].main.temp -273))
                let minimumtemperatureMorning = (Math.floor(data.list[0].main.temp_min - 273)) 
                let maximumtemperatureMorning = (Math.floor(data.list[0].main.temp_max - 273))
                let rainMorning = data  //fix this
                // console.log(data)
                // console.log(dateMorning)
                // console.log(temperatureMorning) 
                // console.log(minimumtemperatureMorning)
                // console.log(maximumtemperatureMorning)
                // console.log(rainMorning);
                document.getElementById("dateMorning").innerHTML = dateMorning
                document.getElementById("temperatureMorning").innerHTML = temperatureMorning
                document.getElementById("minimumtemperatureMorning").innerHTML = minimumtemperatureMorning
                document.getElementById("maximumtemperatureMorning").innerHTML =maximumtemperatureMorning
                document.getElementById("rainMorning").innerHTML = rainMorning  //fix this

        } )
 }
 




//     function weatherForm(){
//     const inputCity = document.getElementById("weatherForm");                
//     inputCity.addEventListener("submit", (e) => {
//         e.preventDefault();
//         console.log(inputCity);
//    })
// }
// fetch('https://reqres.in/api/users', {
//     method: 'POST',
//     headers: {
//         'content-type' : 'application/json'
//     },
//     body: JSON.stringify({
//         name: 'weather today'
//     })
// }
   
//     .then(response => {
//         return response.json()
//     })
//     //response.json())
//     .then(data => console.log(data))
    
// )




