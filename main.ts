input.onButtonPressed(Button.A, function () {
    sec = 0
    min = 0
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    basic.showString("" + min + ":" + sec)
})
let min = 0
let sec = 0
sec = 0
min = 0
basic.forever(function () {
    basic.pause(1000)
    sec += 1
    if (sec == 60) {
        min += 1
        sec = 0
    }
})
