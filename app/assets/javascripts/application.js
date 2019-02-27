//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require_tree .

// global variables
let currentDate
let startTime
let circle

// set DOM variables when document has loaded
document.addEventListener('turbolinks:load', () => {
    // create a variable to hold the game page
    circle = document.getElementById('circle')
    
    circle.addEventListener('click', () => {
        // count the time from when the div turns red until user clicks on screen
    
        // if user clicks before screen turns red, nothing will happen
    
        // create a variable to hold the paragraph to show the score
        
        // display the time in the paragraph on the game page
    })
})

const startGame = () => {
    console.log('start game function is called')

    // generate random time until game page goes red
    let secondsUntilRed = Math.floor((Math.random() * 7 + 2) * 1000)

    // change game page background color to red when time is up
    setTimeout(() => {
        circle.style.backgroundColor = 'red'
        currentDate = new Date()
        startTime = currentDate.getTime()
    }, secondsUntilRed);
}
