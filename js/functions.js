const getRandomIntNumberInRange = (min, max) => {
    return Math.floor(Math.random() * max) + min
}

document.getElementById('dice').addEventListener('click',() => {
    const randomized_number = getRandomIntNumberInRange(1, 6)
    const image = document.querySelector('img')

    if (randomized_number === 1) {
        image.src = './img/1.png'
    } else if (randomized_number === 2) {
        image.src = './img/2.png'
    } else if (randomized_number === 3) {
        image.src = './img/3.png'
    } else if (randomized_number === 4) {
        image.src = './img/4.png'
    } else if (randomized_number === 5) {
        image.src = './img/5.png'
    } else if (randomized_number === 6) {
        image.src = './img/6.png'
    }
})
