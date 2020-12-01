
    function weatherForm(){
    const inputCity = document.getElementById("weatherForm");                
    inputCity.addEventListener("submit", (e) => {
        e.preventDefault();
        console.log(inputCity);
   })
}