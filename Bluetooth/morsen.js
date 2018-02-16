input.onButtonPressed(Button.A, () => {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    radio.sendString(".")
    basic.pause(200)
    music.playTone(220, music.beat(BeatFraction.Half))
})
input.onButtonPressed(Button.B, () => {
    basic.showLeds(`
        . . . . .
        . . . . .
        # # # # #
        . . . . .
        . . . . .
        `)
    radio.sendString("-")
    basic.pause(200)
    music.playTone(349, music.beat(BeatFraction.Whole))
})
radio.onDataPacketReceived(({receivedString}) => {
    if (receivedString == ".") {
        basic.showLeds(`
            . . . . .
            . # # . .
            . # # . .
            . . . . .
            . . . . .
            `)
    } else if (receivedString == "-") {
        basic.showLeds(`
            . . . . .
            # # # # #
            # # # # #
            . . . . .
            . . . . .
            `)
    }
})
radio.setGroup(1)
