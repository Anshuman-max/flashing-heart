input.onPinReleased(TouchPin.P0, function () {
	
})
input.onGesture(Gesture.Shake, function () {
	
})
basic.forever(function () {
    basic.showLeds(`
        . 
        . . . .
    
    
    
        `)
})
basic.forever(function () {
    basic.showLeds(`
        . # . # .
        # . # . #
        # . . . #
        . # . # .
        . . # . .
        `)
})
