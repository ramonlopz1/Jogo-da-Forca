
const drawArea = document.querySelector('#drawArea')
const drawAreaPoints = document.querySelector('#drawAreaPoints')

const pincel = drawArea.getContext('2d')
const pincel2 = drawAreaPoints.getContext('2d')

// x y

// TRIANGULO BASE
pincel.beginPath()
    pincel.fillStyle = 'gray'

    pincel.moveTo(50, 620)

    pincel.lineTo(125, 570)
    pincel.lineTo(200, 620)
    
    pincel.fill()


//////

// BARRA VERTICAL MAIOR
pincel.beginPath()
    pincel.fillStyle = 'gray'
    pincel.fillRect(120, 180, 10, 400)
    pincel.fill()
//////

// BARRA HORIZONTAL
pincel.beginPath()
    pincel.fillStyle = 'gray'
    pincel.fillRect(120, 180, 250, 10)
    pincel.fill()
//////

// BARRA VERTICAL MENOR
pincel.beginPath()
    pincel.fillStyle = 'gray'
    pincel.fillRect(370, 180, 10, 130)
    pincel.fill()
//////

// CABEÇA
function head() {
    pincel.beginPath()
    pincel.fillStyle = '#EB9613'
    pincel.arc(375, 310, 30, 0, 2 * Math.PI)
    pincel.fill()
}
//////

// CORPO    
function body() {
    pincel.beginPath()
    pincel.fillStyle = '#EB9613'
    pincel.fillRect(370, 340, 10, 100)
    pincel.fill()
}
//////

// BRAÇO ESQUERDO
function leftArm() {
    pincel.beginPath()
    pincel.fillStyle = '#EB9613'
    pincel.moveTo(360, 340)

    pincel.lineTo(320, 370)
    pincel.lineTo(335, 370)
    pincel.lineTo(385, 340)
    pincel.fill()
}
//////

// BRAÇO DIREITO
function rightArm() {
    pincel.beginPath()
    pincel.fillStyle = '#EB9613'
    pincel.moveTo(360, 340)

    pincel.lineTo(420, 370)
    pincel.lineTo(435, 370)
    pincel.lineTo(390, 340)
    pincel.fill()
}
//////

// PERNA ESQUERDA
function leftLeg() {
    pincel.beginPath()
    pincel.fillStyle = '#EB9613'
    pincel.moveTo(360, 440)

    pincel.lineTo(320, 470)
    pincel.lineTo(335, 470)
    pincel.lineTo(385, 440)
    pincel.fill()
}
//////

// PERNA DIREITA
function rightLeg() {
    pincel.beginPath()
    pincel.fillStyle = '#EB9613'
    pincel.moveTo(360, 440)

    pincel.lineTo(420, 470)
    pincel.lineTo(435, 470)
    pincel.lineTo(390, 440)
    pincel.fill()
}
//////


function chancePoint(posX) {
    
    pincel2.beginPath()
    pincel2.fillStyle = 'red'
    pincel2.arc(posX, 25, 15, 0, 2 * Math.PI)
    posX = posX + 20
    pincel2.fill()
}

module.exports = {
    head,
    body,
    leftArm,
    rightArm,
    leftLeg,
    rightLeg,
    chancePoint
}