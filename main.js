
    let TaskImgs = document.querySelectorAll('img')

    console.log('js')

       TaskImgs.forEach((image) => {
        image.scr = `./Pictures/${image.id}/${image.id}-${Math.round(Math.random()*42)}.png`
       })

