'use strict'

var gNextId = 100
var gBalloons
var gInterval


function onInit() {
    gBalloons = creatBallons(20)
    renderBalloons()
}

function renderBalloons() {
    var strHTML = ''

    for (var i = 0; i < gBalloons.length; i++) {
        const balloon = gBalloons[i]
        const color = getRandomColor()
        const left = i * 100

        strHTML += `<div style= "background-color:${color}; left:${left}px"; onmouseover="onSpeedUp(${i})" onclick="onBlowingUp(this)" class="balloon"></div>`
    }
    const elSky = document.querySelector('.sky')
    elSky.innerHTML = strHTML

}

function onStart() {
    if (gInterval) return
    gInterval = setInterval(moveBalloons, 500)

}


function moveBalloons() {
    var elBalloons = document.querySelectorAll('.balloon')

    for (var i = 0; i < gBalloons.length; i++) {
        //model
        var balloon = gBalloons[i]
        //Dom
        var elBalloon = elBalloons[i]
        //Update model
        balloon.bottom += balloon.speed
        //Update dom
        elBalloon.style.bottom = balloon.bottom + 'px'
    }
}

function creatBallons(count) {

    const balloons = []
    for (var i = 0; i < count; i++) {
        const balloon = creatBalloon()
        balloons.push(balloon)

    }
    return balloons
}


function creatBalloon() {
    const balloon = {
        id: gNextId++,
        bottom: 0,
        speed: getRandomInt(10, 30),
        color: getRandomColor(),
       


    }
    return balloon
}

function onSpeedUP(idx){
const balloon = gBalloons[idx]
balloon.speed += 10

}

function onBlowingUp(elBalloon) {
    elBalloon.style.display = 'none'
    playAudio()
}

function playAudio() {
    var sound = new Audio('audio/pop.wav')
    sound.play()
}

function getRandomInt(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min) + min)
}


function getRandomColor() {
    var letters = '0123456789ABCDEF'
    var color = '#'
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)]
    }
    return color
}