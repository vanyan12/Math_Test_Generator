$(document).ready(function(){
    let TaskImgs = document.querySelectorAll('img')

       TaskImgs.forEach((image) => {
        image.scr = `./${image.id}-${Math.round(Math.random())}.png`
       })
})
