'use strict'
var gSize = 100

function onBallClick(maxDimeter,elBall) {
    if (gSize < maxDimeter) {
        gSize += getRandomInt(20, 60)
    } else {
        gSize = 100
    }
    var color = getRandomColor()
    elBall.style.height = gSize + 'px'
    elBall.style.width = gSize + 'px'
    elBall.innerText = gSize
    elBall.style.backgroundColor = color
}