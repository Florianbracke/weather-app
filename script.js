


function getWeather(){
cityName = document.querySelector(".city").value;

//variables
const key = "e83c0d271e5edc4f99d6d218e446d655"; 
let api = `http://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${key}`;

//set current date
 document.getElementById("date").innerHTML = new Date();
console.log(cityName)
fetch(api)
    .then(response => response.json())
        .then(data => {
            
                let dateNow = data.list[0].dt_txt;
                let temperatureNow = (Math.floor(data.list[0].main.temp -273));
                let minimumtemperatureNow = (Math.floor(data.list[0].main.temp_min - 273));
                let maximumtemperatureNow = (Math.floor(data.list[0].main.temp_max - 273));
                let rainNow = data.list.rain;

                document.getElementById("dateNow").innerHTML = dateNow;
                document.getElementById("temperatureNow").innerHTML = temperatureNow;
                document.getElementById("minimumtemperatureNow").innerHTML = minimumtemperatureNow;
                document.getElementById("maximumtemperatureNow").innerHTML =maximumtemperatureNow;
                document.getElementById("rainNow").innerHTML = rainNow;  
                // if there is no rain
                if (rainNow == undefined)
                {document.getElementById("rainNow").innerHTML = "no rain!" };
                

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




