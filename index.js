let homeCount = document.getElementById("home-count")
let homeScore = 0

function homeOne() {
    homeScore += 1
    homeCount.textContent = homeScore
}

function homeTwo() {
    homeScore += 2
    homeCount.textContent = homeScore
}

function homeThree() {
    homeScore += 3
    homeCount.textContent = homeScore
}

let guestCount = document.getElementById("guest-count")
let guestScore = 0

function guestOne() {
    guestScore += 1
    guestCount.textContent = guestScore
}

function guestTwo() {
    guestScore += 2
    guestCount.textContent = guestScore
}

function guestThree() {
    guestScore += 3
    guestCount.textContent = guestScore
}