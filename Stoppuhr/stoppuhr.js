let Startzeit = 0
let Endzeit = 0
input.onButtonPressed(Button.B, () => {
    Endzeit = control.eventTimestamp()
    basic.setLedColor(basic.rgbw(
        255,
        0,
        0,
        0
    ))
    music.playTone(262, music.beat(BeatFraction.Half))
    Endzeit = Endzeit - Startzeit
    Endzeit = Endzeit / 1000
    basic.showString(Endzeit.toString())
})
input.onButtonPressed(Button.A, () => {
    Startzeit = control.eventTimestamp()
    basic.setLedColor(basic.rgbw(
        0,
        255,
        0,
        0
    ))
    music.playTone(262, music.beat(BeatFraction.Half))
})
Startzeit = 0
Endzeit = 0
