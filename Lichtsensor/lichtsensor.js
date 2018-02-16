basic.forever(() => {
    if (input.lightLevel() < 30) {
        basic.setLedColor(basic.rgbw(
            255,
            255,
            255,
            0
        ))
    } else {
        basic.setLedColor(basic.rgbw(
            0,
            0,
            0,
            0
        ))
    }
})
