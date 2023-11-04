$(document).ready(function(){
    let TaskImgs = document.querySelectorAll('img')

       TaskImgs.forEach((image) => {
        image.scr = `./Pictures/${image.id}/${image.id}-${Math.round(Math.random()*42)}.png`
       })
})
