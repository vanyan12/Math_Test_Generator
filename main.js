$(document).ready(() => {
    let TaskImgs = document.querySelectorAll('img')

    console.log('js')
    console.log(TaskImgs)

       TaskImgs.forEach((image) => {
        image.scr = `https://github.com/vanyan12/Math_Test_Generator/blob/pdf/Pictures/2Section1/2Section1-1.png?raw=true`
       })

})
