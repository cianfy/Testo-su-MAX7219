max7219_matrix.setup(
4,
DigitalPin.P16,
DigitalPin.P15,
DigitalPin.P14,
DigitalPin.P13
)
max7219_matrix.for_4_in_1_modules(
rotation_direction.clockwise,
false
)
basic.forever(function () {
    max7219_matrix.scrollText(
    "Mattia",
    75,
    100
    )
    for (let index = 0; index < 50; index++) {
        max7219_matrix.randomizeAll()
        basic.pause(100)
    }
    max7219_matrix.fillAll()
    basic.pause(2000)
})
