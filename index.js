//TODO: function accordion

    // const key = "e83c0d271e5edc4f99d6d218e446d655";
    // let api = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${key}`;
    // let apiCity = `https://raw.githubusercontent.com/russ666/all-countries-and-cities-json/6ee538beca8914133259b401ba47a550313e8984/countries.json`
     
    import {getWeather} from "./getWeather.js";
    import {minusThreeHours} from "./minusThreeHours.js";
    import {addThreeHours} from "./addThreeHours.js";
    import {randomCity} from "./randomCity.js";
    import {graph} from "./graph.js";

    // calling functions
    document.querySelector("#run").addEventListener("click", () => {
        getWeather();
        graph();   
    }) 
    document.querySelector("#run1").addEventListener("click", () => {
        minusThreeHours()   
    })
    document.querySelector("#run2").addEventListener("click", () => {
        addThreeHours() 
    }) 
    document.querySelector("#run3").addEventListener("click", () => {
        randomCity()   
    }) 
   