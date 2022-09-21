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
namespace controller {
    /**
     * Gets contoller button pressed
     */
    //% blockId=get_button block="get button pressed"
    export function getButton() {
        press = pins.analogReadPin(AnalogPin.P2)
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
        return button
    }
}
