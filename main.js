$(document).ready(() => {
    let TaskImgs = document.querySelectorAll('img')

    console.log('js')
    console.log(TaskImgs)

       TaskImgs.forEach((image) => {
        image.scr = `../Pictures/$(image.id)`
       })

})
