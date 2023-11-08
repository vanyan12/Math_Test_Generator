$(document).ready(() => {
    let TaskImgs = document.querySelectorAll('img')


       TaskImgs.forEach((image) => {
        image.scr = `./Pictures/$(image.id)/$(image.id)-Math.round(Math.random() * 10).png`
           console.log(image.src)
       })

})
