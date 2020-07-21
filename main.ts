let img = 0
input.onGesture(Gesture.Shake, function () {
    img = randint(0, 2)
    if (true) {
        img = 2
        basic.showLeds(`
            . # . . .
            # . . . .
            . # # # #
            . . # . .
            . . # . .
            `)
    }
    if (true) {
        img = 1
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
        img = 0
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
        if (true) {
            img = 0
        }
    }
})
basic.forever(function () {
	
})
