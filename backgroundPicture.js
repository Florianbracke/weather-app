export function backgroundPicture() {
setInterval( () => {
    i.push("Supercalifragilisticexpialidocious")
    if (i.length == 10)
    {i.length = 1}
    
    document.querySelector("body").style.background=`url(images/${i.length}.jpg)`
    document.querySelector("body").style.backgroundSize = "cover" 
}, 18000);}