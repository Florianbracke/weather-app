
//variables DOM
let array = []


function getWeather(){  

    cityName = document.querySelector(".city").value
    const key = "e83c0d271e5edc4f99d6d218e446d655"
    let api = `http://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${key}`

  
    fetch(api)
        .then(response => response.json())
            .then(data => {
                let date = data.list[Number(array.length)].dt_txt
                let temperatureNow = (data.list[Number(array.length)].main.temp -273);
                let cloudsNow = (data.list[Number(array.length)].clouds.all);
                let windspeedNow = (data.list[Number(array.length)].main.temp_max - 273);
                
                    // put data into HTML
                    document.getElementById("date").innerHTML = cityName +  " at " +date;
                    document.getElementById("temperatureNow").innerHTML = "Outside temperature is " + "<strong>" + temperatureNow.toFixed(2) + " </strong>"+ "°C!";
                    document.getElementById("cloudsNow").innerHTML ="The sky is covered for " + "<strong>"+cloudsNow +"</strong>"+ "% with clouds." ;
                    document.getElementById("windspeedNow").innerHTML ="You can expect windspeed at " + "<strong>"+(windspeedNow *3.6).toFixed(2) +"</strong> km/h";
                      
                    // reach end of data
                    if (array.length > 39) {
                        location.reload()}
                    
                    //place logos into HTML
                    if (cloudsNow > 100){ 
                        document.querySelector("body").style.background="url(images/cloudy.jpg)"
                        document.querySelector("body").style.backgroundSize = "cover" 
                    } if(windspeedNow > 20){
                        document.querySelector("body").style.background="url(images/windy.jpg)"
                        document.querySelector("body").style.backgroundSize = "cover" 
                    } if (cloudsNow < 50 && temperatureNow > 15){
                        document.querySelector("body").style.background="url(images/sunnywarm.jpg)"
                        document.querySelector("body").style.backgroundSize = "cover" 
                    } if (temperatureNow > 15){
                        document.querySelector("body").style.background="url(images/verywarm.jpg)"
                        document.querySelector("body").style.backgroundSize = "cover" 
                    } if (temperatureNow < 2){
                        document.querySelector("body").style.background="url(images/verycold.jpg)"
                        document.querySelector("body").style.backgroundSize = "cover" 
                    } if(windspeedNow > 20 && temperatureNow > 22){
                        document.querySelector("body").style.background="url(images/warmwind.jpg)"
                        document.querySelector("body").style.backgroundSize = "cover" 
                    }if(temperatureNow < 22 && temperatureNow > 15){
                        document.querySelector("body").style.background="url(images/oktemp.jpg)"
                        document.querySelector("body").style.backgroundSize = "cover"   
                    }
                    let i = "";
                    arraydata= [];
                        for (i = 0; i < 40; i++) {
                            arraydata.push(Math.floor(Number(data.list[i].main.temp)-273))
                    }arrayYaxis= [];
                        for (i = -15; i < 40; i++) {
                            arrayYaxis.push(i)     
                    }arrayXaxis=[];
                        for (i = 0; i < 40; i++) {
                        arrayXaxis.push(data.list[i].dt_txt)}
                    
                        var ctx = document.getElementById("myChart");
                        Chart.defaults.global.legend.display = false;
                        var myChart = new Chart(ctx, {
                            type: 'line', 
                            data: {
                                labels: arrayXaxis,
                                
                                datasets: [
                                { 
                                    data: arraydata,
                                    borderWidth: 1,
                                    backgroundColor: "gold",
                                    label: "temperature",
                                    borderColor: "white",
                                    fill: false
                                }
                                ]
                            },
                            options: {
                                scales: {
                                    xAxes: [{gridLines: { color: "rgba(212, 190, 190, 0.664)" }},
                                            {ticks: {display: false}}],
                                    yAxes: [{gridLines: { color: "rgba(212, 190, 190, 0.664)" }},
                                            {ticks: {display: false}}]
                                    }
                            }
                        });
                })
    
    }

 

function addThreeHours(){
    array.push("threehours");    
    return getWeather()    
}

function minusThreeHours(){
    if (array.length == 0){
        alert("sorry, no weather forecast for the past!")
    }else{
        array.pop("threehours");
        return getWeather();
    }  
}




//variabele x = data.link[i] -> loop op i die telkens + 4 doet
//loop
//variabale=  i + 4 && array.push
