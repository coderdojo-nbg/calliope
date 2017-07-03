basic.forever(() => {
    basic.setLedColor(Colors.Red)
    basic.pause(100)
    basic.setLedColor(basic.rgbw(
        0,
        0,
        0,
        0
    ))
    basic.pause(900)
})
