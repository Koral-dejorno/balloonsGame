'use strict'

var gNextId
var gInterval


var gBallons = [
    { id: gNextId++, bottom: 0, speed: 10 },
    { id: gNextId++, bottom: 0, speed: 15 },
    { id: gNextId++, bottom: 0, speed: 20 }
]

function onInit() {
    gInterval = setInterval(moveUp(), 500)
}

function moveUp() {
    const btn = document.querySelector('.btn')
    randerBallons()

}

function randerBallons() {

    for (var i = 0; i < gBallons.length; i++) {
        var gBalloon = gBallons[i]
        var elBalloon = document.querySelectorAll('.balloon')
        elBalloon.style.bottom = gBalloon.bottom + 10 + 'px'
    }
}