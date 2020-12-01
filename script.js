


function getWeather(){

const key = "e83c0d271e5edc4f99d6d218e446d655"; 
let cityName = "gent";
let api = `http://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${key}`;


fetch(api)
    .then(response => response.json())
        .then(data => {
                let clouds= data.list[1].clouds.all;
                let today = data.list[1];
                let tomorrow = data.list[2];
                console.log(today, tomorrow, clouds);
                document.getElementById("clouds").innerHTML= clouds;
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




