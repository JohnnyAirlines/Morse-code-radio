def on_button_pressed_a():
    input2.append(0)
    music.play_tone(262, music.beat(BeatFraction.HALF))
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_ab():
    if len(input2) == 0:
        radio.send_string("n/a")
    elif input2.shift() == 0:
        if len(input2) == 0:
            radio.send_string("e")
        elif input2.shift() == 0:
            if len(input2) == 0:
                radio.send_string("i")
            elif input2.shift() == 0:
                if len(input2) == 0:
                    radio.send_string("s")
                elif input2.shift() == 0:
                    radio.send_string("h")
                else:
                    radio.send_string("v")
            elif len(input2) == 0:
                radio.send_string("u")
            elif input2.shift() == 0:
                radio.send_string("f")
            else:
                pass
        elif len(input2) == 0:
            radio.send_string("a")
        elif input2.shift() == 0:
            if len(input2) == 0:
                radio.send_string("r")
            elif input2.shift() == 0:
                radio.send_string("l")
            else:
                pass
        elif len(input2) == 0:
            radio.send_string("w")
        elif input2.shift() == 0:
            radio.send_string("p")
        else:
            radio.send_string("j")
    elif len(input2) == 0:
        radio.send_string("t")
    elif input2.shift() == 0:
        if len(input2) == 0:
            radio.send_string("n")
        elif input2.shift() == 0:
            if len(input2) == 0:
                radio.send_string("d")
            elif input2.shift() == 0:
                radio.send_string("b")
            else:
                radio.send_string("x")
        elif len(input2) == 0:
            radio.send_string("k")
        elif input2.shift() == 0:
            radio.send_string("c")
        else:
            radio.send_string("y")
    elif len(input2) == 0:
        radio.send_string("m")
    elif input2.shift() == 0:
        if len(input2) == 0:
            radio.send_string("g")
        elif input2.shift() == 0:
            radio.send_string("z")
        else:
            radio.send_string("q")
    elif len(input2) == 0:
        radio.send_string("o")
    elif input2.shift() == 0:
        pass
    else:
        pass
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_received_string(receivedString):
    basic.show_string(receivedString)
radio.on_received_string(on_received_string)

def on_button_pressed_b():
    input2.append(1)
    music.play_tone(262, music.beat(BeatFraction.BREVE))
input.on_button_pressed(Button.B, on_button_pressed_b)

input2: List[number] = []
input2 = []