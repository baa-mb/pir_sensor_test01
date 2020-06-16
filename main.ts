basic.showIcon(IconNames.SmallDiamond)
serial.writeValue("x", 0)
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P10) == 1) {
        basic.showIcon(IconNames.Heart)
        music.playTone(262, music.beat(BeatFraction.Whole))
        serial.writeValue("x", pins.analogReadPin(AnalogPin.P10))
        basic.pause(200)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
    basic.pause(100)
})
