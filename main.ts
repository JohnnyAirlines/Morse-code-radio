input.onButtonPressed(Button.A, function () {
    input2.push(0)
    music.playTone(262, music.beat(BeatFraction.Half))
})
input.onButtonPressed(Button.AB, function () {
    if (input2.length == 0) {
        radio.sendString("n/a")
    } else if (input2.shift() == 0) {
        if (input2.length == 0) {
            radio.sendString("e")
        } else if (input2.shift() == 0) {
            if (input2.length == 0) {
                radio.sendString("i")
            } else if (input2.shift() == 0) {
                if (input2.length == 0) {
                    radio.sendString("s")
                } else if (input2.shift() == 0) {
                    radio.sendString("h")
                } else {
                    radio.sendString("v")
                }
            } else if (input2.length == 0) {
                radio.sendString("u")
            } else if (input2.shift() == 0) {
                radio.sendString("f")
            } else {
            	
            }
        } else if (input2.length == 0) {
            radio.sendString("a")
        } else if (input2.shift() == 0) {
            if (input2.length == 0) {
                radio.sendString("r")
            } else if (input2.shift() == 0) {
                radio.sendString("l")
            } else {
            	
            }
        } else if (input2.length == 0) {
            radio.sendString("w")
        } else if (input2.shift() == 0) {
            radio.sendString("p")
        } else {
            radio.sendString("j")
        }
    } else if (input2.length == 0) {
        radio.sendString("t")
    } else if (input2.shift() == 0) {
        if (input2.length == 0) {
            radio.sendString("n")
        } else if (input2.shift() == 0) {
            if (input2.length == 0) {
                radio.sendString("d")
            } else if (input2.shift() == 0) {
                radio.sendString("b")
            } else {
                radio.sendString("x")
            }
        } else if (input2.length == 0) {
            radio.sendString("k")
        } else if (input2.shift() == 0) {
            radio.sendString("c")
        } else {
            radio.sendString("y")
        }
    } else if (input2.length == 0) {
        radio.sendString("m")
    } else if (input2.shift() == 0) {
        if (input2.length == 0) {
            radio.sendString("g")
        } else if (input2.shift() == 0) {
            radio.sendString("z")
        } else {
            radio.sendString("q")
        }
    } else if (input2.length == 0) {
        radio.sendString("o")
    } else if (input2.shift() == 0) {
    	
    } else {
    	
    }
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
input.onButtonPressed(Button.B, function () {
    input2.push(1)
    music.playTone(262, music.beat(BeatFraction.Breve))
})
let input2: number[] = []
input2 = []
