//TODO: function accordion
//TODO: random city



//variables DOM
    let array = [];
    var i = [];

function getWeather(){  
    //variables 
    const key = "e83c0d271e5edc4f99d6d218e446d655";
    let cityName = document.querySelector(".city").value; 
    let api = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${key}`;
        // cityName = document.querySelector(".city").value
        // const key = "e83c0d271e5edc4f99d6d218e446d655"
        // let api = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${key}`

   //fetch data
    fetch(api) .then(response => response.json()) .then(data => {
                let date = data.list[Number(array.length)].dt_txt
                let temperatureNow = (data.list[Number(array.length)].main.temp -273);
                let cloudsNow = (data.list[Number(array.length)].clouds.all);
                let windspeedNow = (data.list[Number(array.length)].main.temp_max - 273);
                
                //to get time data 
                let timeZoneHour = Number((data.city.timezone)-3600) / 3600;
                let cityTimeZoneHour = new Date().getHours() + timeZoneHour;

                // put data into HTML
                document.getElementById("date").innerHTML = cityName + ", "  + data.city.country + " at " + cityTimeZoneHour +"'o clock " ;
                document.getElementById("temperatureNow").innerHTML = "Outside temperature is " + "<strong>" + temperatureNow.toFixed(2) + " </strong>"+ "°C!";
                document.getElementById("cloudsNow").innerHTML ="The sky is covered for " + "<strong>"+cloudsNow +"</strong>"+ "% with clouds." ;
                document.getElementById("windspeedNow").innerHTML ="You can expect windspeed at " + "<strong>"+(windspeedNow *3.6).toFixed(2) +"</strong> km/h";
                //place pictures onto HTML
                   
            })
} 

setInterval(backgroundPicture = () => {
    i.push("Supercalifragilisticexpialidocious")
    if (i.length == 10)
    {i.length = 1}
    
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

function randomCity(){
    let apiCity = `https://raw.githubusercontent.com/russ666/all-countries-and-cities-json/6ee538beca8914133259b401ba47a550313e8984/countries.json`
    fetch(apiCity) 
        .then(response => response.json()) 
            .then(data => {
            
            // get random array out of object 
            let randomArray = Object.values(data)[Math.floor(Math.random()*(Object.keys(data).length))]
            // get random index out of above
            let randomCity = Math.floor(Math.random()*randomArray.length)
            
            document.querySelector(".city").value = randomArray[randomCity]

            getWeather(); graph();
    })}

function graph(){
    //variables 

    //fetch data
    const key = "e83c0d271e5edc4f99d6d218e446d655";
     cityName = document.querySelector(".city").value; 
    let api = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${key}`;

    fetch(api) .then(response => response.json()) .then(data => {
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


    

