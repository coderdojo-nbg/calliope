let spalte = 0
let reihe = 0
radio.onDataPacketReceived(({receivedNumber, receivedString}) => {
    reihe = receivedNumber % 10
    spalte = receivedNumber / 10
    led.plot(spalte, reihe)
    if (receivedString == "neu") {
        basic.clearScreen()
    }
})
reihe = 0
spalte = 0
radio.setGroup(0)
