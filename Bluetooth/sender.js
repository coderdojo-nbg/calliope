let spalte = 0
let koordinaten = 0
let reihe = 0
input.onPinPressed(TouchPin.P0, () => {
    if (spalte > 0) {
        spalte += -1
    }
    basic.clearScreen()
    led.plot(spalte, reihe)
})
input.onPinPressed(TouchPin.P3, () => {
    if (spalte < 4) {
        spalte += 1
    }
    basic.clearScreen()
    led.plot(spalte, reihe)
})
input.onButtonPressed(Button.B, () => {
    reihe = 0
    spalte = 0
    basic.clearScreen()
    basic.showLeds(`
        # . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
input.onPinPressed(TouchPin.P2, () => {
    if (reihe < 4) {
        reihe += 1
    }
    basic.clearScreen()
    led.plot(spalte, reihe)
})
input.onPinPressed(TouchPin.P1, () => {
    if (reihe > 0) {
        reihe += -1
    }
    basic.clearScreen()
    led.plot(spalte, reihe)
})
input.onButtonPressed(Button.A, () => {
    koordinaten = spalte * 10 + reihe
    radio.sendNumber(koordinaten)
})
input.onButtonPressed(Button.AB, () => {
    radio.sendString("neu")
})
radio.setGroup(0)
basic.showLeds(`
    # . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
reihe = 0
spalte = 0
