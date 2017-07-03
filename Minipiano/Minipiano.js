basic.forever(() => {
    if (input.pinIsPressed(TouchPin.P0)) {
        basic.showLeds(`
            . . # # .
            . # . . .
            . # . . .
            . # . . .
            . . # # .
            `)
        music.playTone(262, music.beat(BeatFraction.Half))
        basic.setLedColor(Colors.Red)
    } else if (input.pinIsPressed(TouchPin.P1)) {
        basic.showLeds(`
            . . # # #
            . # . . .
            . # . # #
            . # . . #
            . . # # #
            `)
        music.playTone(392, music.beat(BeatFraction.Half))
        basic.setLedColor(Colors.Green)
    } else if (input.pinIsPressed(TouchPin.P2)) {
        basic.showLeds(`
            . # # # .
            . # . . .
            . # # # .
            . # . . .
            . # # # .
            `)
        music.playTone(330, music.beat(BeatFraction.Half))
        basic.setLedColor(Colors.Yellow)
    } else if (input.pinIsPressed(TouchPin.P3)) {
        basic.showLeds(`
            . . # . .
            . # . # .
            . # # # .
            . # . # .
            . # . # .
            `)
        music.playTone(440, music.beat(BeatFraction.Half))
        basic.setLedColor(Colors.Blue)
    }
})
