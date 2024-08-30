/**
* Controller blocks
*/

let press = 0
let button = "0"
let Buttons = {
    '2': 'A',
    '516': 'B',
    '684': 'C',
    '768': 'D',
    '853': 'E',
    '819': 'F'
};

let x = 0
let y = 0
let motors = ""

namespace controller {
    /**
     * Gets contoller button pressed
     */
    //% block="get button pressed"
    export function getButton() {
        press = pins.analogReadPin(AnalogPin.P2)
        if (press < 1000) {
            if (press > 843) {
                button = 'E'
            } else if (press > 809) {
                button = 'F'
            } else if (press > 758) {
                button = 'D'
            } else if (press > 674) {
                button = 'C'
            } else if (press > 506) {
                button = 'B'
            } else if (press > - 8) {
                button = 'A'
            }
            
        } else button = '0'
        return button
    }

    /**
     * gets joystick y
     */
    //% block="get joystick Y"
    //% advanced=true
    export function getY() {
        return y = pins.analogReadPin(AnalogPin.P1)
    }

    /**
     * gets joystick x
     */
    //% block="get joystick X"
    //% advanced=true
    export function getX() {
        return x = pins.analogReadPin(AnalogPin.P0)
    }

    /**
     * convert joystick x and y into motor left and right
     */
    //% block="convert joystick"
    export function motorValues() {
        let stickX = getX() - 512
        let stickY = getY() - 512
        let left = stickY + stickX
        let right = stickY - stickX
        return motors = left.toString() + " " + right.toString()
    }
}
