input.onButtonPressed(Button.A, function () {
    grad_pfeil = 180
    basic.showLeds(`
        # # # # #
        # . . . #
        # . . . #
        # . . . #
        # # # # #
        `)
    for (let index = 0; index < 30; index++) {
        basic.pause(10 * 1000)
        grad_pfeil = grad_pfeil - 6
        pins.servoWritePin(AnalogPin.P1, grad_pfeil)
    }
    music.playMelody("G B A G C5 B A B ", 120)
    basic.showLeds(`
        # # # # #
        # . # . #
        # . # . #
        # . # . #
        # # # # #
        `)
    for (let index = 0; index < 30; index++) {
        basic.pause(90 * 1000)
        grad_pfeil = grad_pfeil + 6
        pins.servoWritePin(AnalogPin.P1, grad_pfeil)
    }
    music.playMelody("A F A F A F A F ", 120)
    basic.clearScreen()
})
let grad_pfeil = 0
pins.servoWritePin(AnalogPin.P1, 180)
