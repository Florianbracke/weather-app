
//variables DOM
let array = []

function getWeather(){  

    //variables 
    cityName = document.querySelector(".city").value
    const key = "e83c0d271e5edc4f99d6d218e446d655"
    let api = `http://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${key}`

   //fetch data
   dataSet= fetch(api)
        .then(response => response.json())
            .then(data => {
                let date = data.list[Number(array.length)].dt_txt
                let temperatureNow = (data.list[Number(array.length)].main.temp -273);
                let cloudsNow = (data.list[Number(array.length)].clouds.all);
                let windspeedNow = (data.list[Number(array.length)].main.temp_max - 273);
                
                //to get time data 
                let timeZone = Number(data.city.timezone)
                let timeCity = data.list[Number(array.length)].dt
                let time =  timeCity - timeZone
                let timeToDate = new Date(time * 1000)  // = timezone inclusive
                let timeZoneHours = timeToDate.getHours()
                 // let timeZoneMinutes = timeToDate.getMinutes()       <---- get this to work
               
                

              //  console.log(date.getTime() / 1000)
                const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                let timeLanguage = timeToDate.toLocaleDateString('nl-NL', options);

                // put data into HTML
                document.getElementById("date").innerHTML = cityName + ", "  + data.city.country + " at " + timeZoneHours +"'o clock " +timeLanguage;
                document.getElementById("temperatureNow").innerHTML = "Outside temperature is " + "<strong>" + temperatureNow.toFixed(2) + " </strong>"+ "°C!";
                document.getElementById("cloudsNow").innerHTML ="The sky is covered for " + "<strong>"+cloudsNow +"</strong>"+ "% with clouds." ;
                document.getElementById("windspeedNow").innerHTML ="You can expect windspeed at " + "<strong>"+(windspeedNow *3.6).toFixed(2) +"</strong> km/h";
                      
                // reach end of data
                if (array.length > 39) {
                    location.reload()}
                    
                    //place pictures onto HTML
                   
            })
} 


var i = [];

setInterval(() => {
    i.push("boom")
    if (i.length > 9)
    {clearInterval}
    
    document.querySelector("body").style.background=`url(images/${i.length}.jpg)`
    document.querySelector("body").style.backgroundSize = "cover" 
}, 18000);

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

function graph(){

    //variables 
    cityName = document.querySelector(".city").value
    const key = "e83c0d271e5edc4f99d6d218e446d655"
    let api = `http://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${key}`

    //fetch data
    fetch(api)
        .then(response => response.json())
            .then(data => {
                let i = "";

                    //prepare arrays for X- & Y-axis
                    arraydata= [];
                        for (i = 0; i < 40; i+=2) {
                        arraydata.push(Math.floor(Number(data.list[i].main.temp)-273))
                    }arrayYaxis= [];
                        for (i = -15; i < 40; i++) {
                            arrayYaxis.push(i)     
                    }arrayXaxis=[];
                        for (i = 0; i < 40; i+=2) {
                      arrayXaxis.push(data.list[i].dt_txt)}
                     // arrayXaxis.push(timeZoneHours)}

                        //graph data + styling
                        var ctx = document.getElementById("myChart");
                        
                        var myChart = new Chart(ctx, {
                            type: 'line', 
                            data: {
                                labels: arrayXaxis,
                                datasets: [{
                                    data: arraydata,
                                    borderWidth: 1,
                                    backgroundColor: "gold",
                                    label: "temperature",
                                    borderColor: "white",
                                    color: "white",
                                    fill: false }]},
                            options: {
                            layout: {
                                padding: {
                                    left: 50,
                                    right: 50,
                                    top: 50,
                                    bottom: 100
                            }},  
                            scales: {
                                xAxes: [{
                                    display: false,
                                    gridLines: {
                                        drawOnChartArea: false,
                                        tickMarkLength: false,
                                        drawBorder: false,
                                        
                                    }
                                }],
                                yAxes: [{
                                    display: true, 
                                }],
                            },

                            legend: {
                                display: false
                            },
                        }
                                         
                                  
                            
                        });
            }) 
}


