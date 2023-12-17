$(document).ready(() => {
    let TaskImgs = document.querySelectorAll('img')
    let SecCount = {
        'Section1': 37,
        'Section2': 73,
        'Section3': 63,
        'Section4': 49,
        'Section5': 66,
        'Section6': 23,
        'Section7': 20,
        'Section8': 68,
        'Section9': 23,
        'Section10': 26,
        '2Section1': 43,
        '2Section2': 19,
        '2Section3': 19,
        '2Section4': 23,
        '2Section5': 35,
        '2Section6': 43,
        '2Section7': 29,
        '2Section8': 86,
        '3Section1': 46,
        '3Section2': 77,
        '3Section4': 16   
    }


       TaskImgs.forEach((image) => {
        image.src = `Pictures/${image.id}/${image.id}-${(Math.ceil(Math.random() * SecCount[image.id]))}.png`
       })

})
