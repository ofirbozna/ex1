'use strict'
var gSize = 100

function onBallClick(){
    if(gSize<400){
    gSize+=50
    }else{
        gSize=100
    }

    const elBall = document.querySelector('.ball')
    elBall.style.height = gSize + 'px'
    elBall.style.width = gSize + 'px'
    elBall.innerText = gSize
}