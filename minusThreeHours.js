export {minusThreeHours}

let minusThreeHours = (array,cityName, api, key) => {
    if (array.length == 0){
        alert("sorry, no weather forecast for the past!")
    }else{
        array.pop("threehours");
        return getWeather(cityName, api, key);
    }  
}
