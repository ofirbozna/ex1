'use strict'
var gSize = 100

function onBallClick(){
    gSize+=50
    const elBall = document.querySelector('.ball')
    elBall.style.height = gSize + 'px'
    elBall.style.width = gSize + 'px'
    elBall.innerText = gSize
}