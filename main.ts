radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        if (Juego == 2) {
            basic.showIcon(IconNames.Happy)
        } else if (Juego == 1) {
            basic.showIcon(IconNames.Asleep)
        } else {
            basic.showIcon(IconNames.Sad)
        }
    } else if (receivedNumber == 2) {
        if (Juego == 2) {
            basic.showIcon(IconNames.Asleep)
        } else if (Juego == 1) {
            basic.showIcon(IconNames.Happy)
        } else {
            basic.showIcon(IconNames.Sad)
        }
    } else if (receivedNumber == 3) {
        if (Juego == 2) {
            basic.showIcon(IconNames.Sad)
        } else if (Juego == 1) {
            basic.showIcon(IconNames.Happy)
        } else {
            basic.showIcon(IconNames.Asleep)
        }
    }
})
input.onGesture(Gesture.Shake, function () {
    Juego = randint(1, 3)
    radio.sendNumber(Juego)
    if (Juego == 1) {
        basic.showIcon(IconNames.Chessboard)
    } else if (Juego == 2) {
        basic.showIcon(IconNames.Square)
    } else {
        basic.showIcon(IconNames.Scissors)
    }
    basic.pause(2000)
})
let Juego = 0
radio.setGroup(1)
