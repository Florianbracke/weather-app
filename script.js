
function getWeather(){
//variables    inside function for now
let cityName = "gent";
let api = `http://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${key}`;
const key = "e83c0d271e5edc4f99d6d218e446d655"; 

fetch(api)
    .then ( function(response) {
        let data = response.json();console.log(data)
        return data;
        
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




