let Platzhalter = 0
let wartezeit = 0
basic.forever(() => {
    basic.setLedColor(Colors.Red)
    basic.pause(50)
    basic.setLedColor(basic.rgbw(
        0,
        0,
        0,
        0
    ))
    basic.pause(wartezeit)
    if (input.buttonIsPressed(Button.A)) {
        Platzhalter += -50
        if (wartezeit < 300) {
            wartezeit = 300
        }
    }
    if (input.buttonIsPressed(Button.B)) {
        Platzhalter += 50
        if (wartezeit > 1500) {
            wartezeit = 1500
        }
    }
})
wartezeit = 500
