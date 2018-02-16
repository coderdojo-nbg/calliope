let zufall = 0
let treffer = 0
let Platzhalter = 0
input.onButtonPressed(Button.A, () => {
    if (zufall == 0) {
        treffer += 1
        basic.showLeds(`
            . . . . .
            . . . . #
            . . . # .
            # . # . .
            . # . . .
            `)
    } else {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
    }
    basic.pause(100)
})
input.onButtonPressed(Button.B, () => {
    if (zufall == 1) {
        treffer += 1
        basic.showLeds(`
            . . . . .
            . . . . #
            . . . # .
            # . # . .
            . # . . .
            `)
    } else {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
    }
    basic.pause(100)
})
input.onGesture(Gesture.Shake, () => {
    treffer = 0
    basic.pause(500)
    for (let i = 0; i < 20; i++) {
        zufall = Math.random(3)
        if (zufall == 0) {
            basic.showLeds(`
                . . # . .
                # . # . .
                # . # . .
                . . # . .
                . . # . .
                `)
        } else if (zufall == 1) {
            basic.showLeds(`
                . . # . .
                . . # . #
                . . # . #
                . . # . .
                . . # . .
                `)
        } else if (zufall == 2) {
            basic.showLeds(`
                . . # . .
                # . # . #
                # . # . #
                . . # . .
                . . # . .
                `)
        }
        basic.pause(300)
        basic.showLeds(`
            . . # . .
            . . # . .
            . . # . .
            . . # . .
            . . # . .
            `)
    }
    basic.showNumber(treffer)
    basic.pause(250)
    if (treffer >= 19) {
        basic.showIcon(IconNames.Fabulous)
    } else if (treffer >= 15) {
        basic.showIcon(IconNames.Happy)
    } else if (treffer >= 10) {
        basic.showIcon(IconNames.Meh)
    } else {
        basic.showIcon(IconNames.Sad)
    }
})
input.onButtonPressed(Button.AB, () => {
    if (zufall == 2) {
        treffer += 1
        basic.showLeds(`
            . . . . .
            . . . . #
            . . . # .
            # . # . .
            . # . . .
            `)
    } else {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
    }
    basic.pause(100)
})
Platzhalter = 0
for (let i = 0; i < 20; i++) {
    zufall = Math.random(3)
    if (zufall == 0) {
        basic.showLeds(`
            . . # . .
            # . # . .
            # . # . .
            . . # . .
            . . # . .
            `)
    } else if (zufall == 1) {
        basic.showLeds(`
            . . # . .
            . . # . #
            . . # . #
            . . # . .
            . . # . .
            `)
    } else if (zufall == 2) {
        basic.showLeds(`
            . . # . .
            # . # . #
            # . # . #
            . . # . .
            . . # . .
            `)
    }
    basic.pause(300)
    basic.showLeds(`
        . . # . .
        . . # . .
        . . # . .
        . . # . .
        . . # . .
        `)
}
basic.showNumber(treffer)
basic.pause(250)
if (treffer >= 19) {
    basic.showIcon(IconNames.Fabulous)
} else if (treffer >= 15) {
    basic.showIcon(IconNames.Happy)
} else if (treffer >= 10) {
    basic.showIcon(IconNames.Meh)
} else {
    basic.showIcon(IconNames.Sad)
}
