//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require_tree .

// global variables
let startTime
let circle

// set DOM variables when document has loaded
document.addEventListener('turbolinks:load', () => {
    // create a variable to hold the game page
    circle = document.getElementById('circle')
    
    circle.addEventListener('click', () => {
        // count the time from when the div turns red until user clicks on screen
        let currentDate = new Date()
        let currentTime = currentDate.getTime()
        let endTime = currentTime - startTime
    
        // create a variable to hold the paragraph to show the score
        let displayReactionTime = document.getElementById('paragraph')
        
        // display the time in the paragraph on the game page
        displayReactionTime.innerHTML = `Your reaction time was: 0.${endTime} seconds`
    })
})

const startGame = () => {
    // generate random time until game page goes red
    let secondsUntilRed = Math.floor((Math.random() * 7 + 2) * 1000)

    // change game page background color to red when time is up
    setTimeout(() => {
        circle.style.backgroundColor = 'red'
        let currentDate = new Date()
        startTime = currentDate.getTime()
    }, secondsUntilRed);
}
