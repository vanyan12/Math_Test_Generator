$(document).ready(() => {
    let TaskImgs = document.querySelectorAll('img')

    console.log('js')
    console.log(TaskImgs)

       TaskImgs.forEach((image) => {
        image.scr = `../Pictures/$(image.id)/$(image.id)-Math.round(Math.random() * 10).png`
       })

})
