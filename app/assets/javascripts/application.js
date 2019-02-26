//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require_tree .

const startGame = () => {
    // generate random time until game page goes red
    let secondsUntilRed = Math.floor((Math.random() * 7 + 2) * 1000)

    // create a variable to hold the game page
    let background = document.getElementById('test')

    // change game page background color to red when time is up
    setTimeout(() => {
        background.style.backgroundColor = 'red'
    }, secondsUntilRed);

    // start a timer when time is up

    // count the time from when the div turns red until user clicks on screen

    // create a variable to hold the paragraph to show the score
    
    // display the time in the paragraph on the game page
}
