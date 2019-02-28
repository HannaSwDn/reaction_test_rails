//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require_tree .

// global variables
let startTime
let circle

document.addEventListener('turbolinks:load', () => {
    circle = document.getElementById('circle')
    
    circle.addEventListener('click', () => {
        let currentDate = new Date()
        let currentTime = currentDate.getTime()
        let endTime = currentTime - startTime
    
        let displayReactionTime = document.getElementById('paragraph')
        
        displayReactionTime.innerHTML = `Your reaction time was: ${endTime / 1000} seconds`
    })
})

const startGame = () => {
    let secondsUntilRed = Math.floor((Math.random() * 7 + 2) * 1000)

    setTimeout(() => {
        circle.style.backgroundColor = 'red'
        let currentDate = new Date()
        startTime = currentDate.getTime()
    }, secondsUntilRed);
}

const openModal = () => {
    let modal = document.getElementById('modal')
    modal.style.display = 'block'
}

const closeModal = () => {
    let modal = document.getElementById('modal')
    modal.style.display = 'none'
}
