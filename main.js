$(document).ready(function(){
    let TaskImgs = document.querySelectorAll('img')

       TaskImgs.forEach((image) => {
        image.scr = `./Pictures/${image.id}-${Math.round(Math.random())}.png`
       })
})
