input.onButtonPressed(Button.AB, () => {
    basic.showLeds(`
        . . . . .
        . . . . #
        . . . . #
        . . . . #
        . . . . .
        `)
    music.playTone(262, music.beat(BeatFraction.Whole))
    basic.pause(1000)
    basic.showLeds(`
        . . . . .
        . . . # #
        . . . # #
        . . . # #
        . . . . .
        `)
    music.playTone(262, music.beat(BeatFraction.Whole))
    basic.pause(1000)
    basic.showLeds(`
        . . . . .
        . . # # #
        . . # # #
        . . # # #
        . . . . .
        `)
    music.playTone(262, music.beat(BeatFraction.Whole))
    basic.pause(1000)
    basic.showLeds(`
        . . . . .
        . # # # #
        . # # # #
        . # # # #
        . . . . .
        `)
    music.playTone(262, music.beat(BeatFraction.Whole))
    basic.pause(1000)
    basic.showLeds(`
        . . . . .
        # # # # #
        # # # # #
        # # # # #
        . . . . .
        `)
    music.playTone(262, music.beat(BeatFraction.Whole))
    basic.pause(1000)
    basic.clearScreen()
    music.playTone(523, music.beat(BeatFraction.Whole))
})
