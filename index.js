let player = {
    name: "</ Ma-lin-gee > ",
    chips: "100 💰"
}
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
message = ""
let messageEl = document.getElementById("message-el")
let cardEl = document.getElementById("cards-el")
let sumEl = document.getElementById("sum-el")
let playerEl = document.getElementById("player-el")
// "</ Ma-Lin-Gee > : GH¢ 100 💰"

playerEl.textContent = player.name + ": GH¢  " + player.chips


function getRandomCard() {
    let randonNumber = Math.floor(Math.random() * 13 ) + 1
    if (randonNumber === 1) {
        return 11
    } else if (randonNumber > 10) {
        return 10
    } else {
        return randonNumber
    }
} 

function startGame() {
    isAlive = true
    let firstCard  = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame() {
    cardEl.textContent = "Cards: " 
    for (let i = 0; i < cards.length; i++ ) {
        cardEl.textContent += cards[i]  + " " 
    }

    sumEl.textContent = "Sum: " + sum

    if (sum < 21) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You`ve won blacjack!"
        hasBlackJack = true
    } else {
        message = "you`re out of the Game!"
        isAlive = false
    }
    messageEl.textContent = message
}

function newCard() {
    if (hasBlackJack === false && isAlive === true){
     let card = getRandomCard()
    sum += card
    cards.push(card)
    renderGame()
    }
    
}
 