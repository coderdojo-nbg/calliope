input.onButtonPressed(Button.A, () => {
    basic.showLeds(`
        . # . . .
        . . # . .
        . # # # .
        . # # # .
        . # # # .
        `)
    basic.setLedColor(Colors.Orange)
    basic.pause(500)
    basic.showString("Mjam")
    basic.showLeds(`
        . . . . .
        . # . # .
        . . # . .
        # . . . #
        . # # # .
        `)
    basic.pause(1000)
    basic.setLedColor(basic.rgbw(
        0,
        0,
        0,
        0
    ))
})
input.onGesture(Gesture.TiltLeft, () => {
    basic.showLeds(`
        . # . . .
        # . . # .
        # . # . .
        # . . # .
        . # . . .
        `)
    basic.pause(1000)
    basic.showLeds(`
        . . . . .
        . # . # .
        . . # . .
        # . . . #
        . # # # .
        `)
})
input.onGesture(Gesture.TiltRight, () => {
    basic.showLeds(`
        . . . # .
        . # . . #
        . . # . #
        . # . . #
        . . . # .
        `)
    basic.pause(1000)
    basic.showLeds(`
        . . . . .
        . # . # .
        . . # . .
        # . . . #
        . # # # .
        `)
})
input.onButtonPressed(Button.AB, () => {
    basic.showLeds(`
        . # . . .
        . # . . .
        . . # . .
        . # # # .
        # # # # #
        `)
    basic.pause(500)
    basic.showString("Pups")
    music.playTone(330, music.beat(BeatFraction.Half))
    music.playTone(294, music.beat(BeatFraction.Half))
    music.playTone(262, music.beat(BeatFraction.Whole))
    basic.showLeds(`
        . . . . .
        . # . # .
        . . # . .
        # . . . #
        . # # # .
        `)
})
input.onButtonPressed(Button.B, () => {
    basic.showLeds(`
        # # . # #
        # # . # #
        . . # . .
        # . . . #
        . # # # .
        `)
    basic.setLedColor(Colors.Green)
    music.playTone(131, music.beat(BeatFraction.Whole))
    music.playTone(147, music.beat(BeatFraction.Whole))
    music.playTone(165, music.beat(BeatFraction.Whole))
    basic.pause(1500)
    basic.setLedColor(basic.rgbw(
        0,
        0,
        0,
        0
    ))
    basic.showLeds(`
        . . . . .
        . # . # .
        . . # . .
        # . . . #
        . # # # .
        `)
})
input.onGesture(Gesture.Shake, () => {
    basic.showLeds(`
        . . . . .
        . # . # .
        . . # . .
        # . . . #
        . # # # .
        `)
    basic.pause(100)
    basic.showLeds(`
        . # . # .
        . . # . .
        . . . . .
        . # # # .
        # . . . #
        `)
    basic.pause(100)
    basic.showLeds(`
        . . . . .
        . # . # .
        . . # . .
        # . . . #
        . # # # .
        `)
    basic.pause(100)
    basic.showLeds(`
        . # . # .
        . . # . .
        . . . . .
        . # # # .
        # . . . #
        `)
    basic.pause(100)
    basic.showLeds(`
        . . . . .
        . # . # .
        . . # . .
        # . . . #
        . # # # .
        `)
})
basic.showLeds(`
    # . # . #
    # . # . .
    # # # . #
    # . # . #
    # . # . #
    `)
basic.pause(1000)
basic.showLeds(`
    . . # . .
    . # . . .
    # # # # #
    . # . . .
    . . # . .
    `)
basic.pause(1000)
basic.showString("Futter")
basic.showLeds(`
    . . # . .
    . . . # .
    # # # # #
    . . . # .
    . . # . .
    `)
basic.pause(1000)
basic.showString("Streicheln")
basic.showLeds(`
    . . . . .
    . # . # .
    . . # . .
    # . . . #
    . # # # .
    `)
