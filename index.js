const startButtonEl = document.getElementById('startButton');
const cash = parseInt(document.getElementsByName('money')[0].value);
const bet = parseInt(document.getElementsByName('wager')[0].value);

function getRandomNumber() {
    return Math.floor(Math.random() * 4) +1;
}

function getElement(id) {
    return document.getElementById(id);
}

function getElements(className) {
    return document.getElementsByClassName(className);
}

function winMessage() {
    const msg = document.getElementById("winMessage");
    document.getElementById('winMessage').hidden = false
}

function hideMessage() {
    const msg = document.getElementById("winMessage");
    document.getElementById("winMessage").hidden = true
}

//========================================================================//

function spin() {

    const startButtonElement = document.getElementById("startButton");
    var wager = parseInt(document.getElementsByName('wager')[0].value);
    var money = parseInt(document.getElementsByName('money')[0].value);

    if (wager > money) {
        return; 
    }

    if (money <= 0) {
        startButtonElement.classList.add("startButtonFalse");
    }

    if (money > 0) {
        document.getElementsByName('money')[0].value = money - wager;
        }

    const numb1 = getRandomNumber();
    const numb2 = getRandomNumber();
    const numb3 = getRandomNumber();

    const line1 = getElement('line1');
    const line2 = getElement('line2');
    const line3 = getElement('line3');

    line1.innerHTML = `${numb1}`;
    line2.innerHTML = `${numb2}`;
    line3.innerHTML = `${numb3}`;

    if (numb1 == numb2 && numb1 === numb3) {
        winMessage();
        document.getElementsByName('money')[0].value = money + (3 * wager);
    } else {
        hideMessage();
    }
}

//========================================================================//
var money = parseInt(document.getElementsByName('money')[0].value);

const cantBeOtherElement = document.getElementById("cantBeOther");
const cantBeZeroElement = document.getElementById("cantBeZero");
const toHigh = document.getElementById("toHigh");

function checkWager() {
    var wager = parseInt(document.getElementsByName('wager')[0].value)
    if (isNaN(wager)){
        cantBeOtherElement.classList.remove("wagerMessageHidden");
        cantBeOtherElement.classList.add("wagerClass");
        cantBeZeroElement.classList.remove("wagerClass");
        cantBeZeroElement.classList.add("wagerMessageHidden");
        toHigh.classList.remove("wagerClass")
        toHigh.classList.add("wagerMessageHidden");
    } else {
        if (wager <= 0){
            cantBeOtherElement.classList.remove("wagerClass");
            cantBeOtherElement.classList.add("wagerMessageHidden");
            cantBeZeroElement.classList.remove("wagerMessageHidden");
            cantBeZeroElement.classList.add("wagerClass");
            toHigh.classList.remove("wagerClass")
            toHigh.classList.add("wagerMessageHidden");
        } else {
            if(wager > parseInt(document.getElementsByName('money')[0].value)){
                cantBeOtherElement.classList.remove("wagerClass");
                cantBeOtherElement.classList.add("wagerMessageHidden");
                cantBeZeroElement.classList.remove("wagerClass");
                cantBeZeroElement.classList.add("wagerMessageHidden");
                toHigh.classList.remove("wagerMessageHidden")
                toHigh.classList.add("wagerClass");
            } else {
                    cantBeOtherElement.classList.remove("wagerClass");
                    cantBeOtherElement.classList.add("wagerMessageHidden");
                    cantBeZeroElement.classList.remove("wagerClass");
                    cantBeZeroElement.classList.add("wagerMessageHidden");
                    toHigh.classList.remove("wagerClass")
                    toHigh.classList.add("wagerMessageHidden");
                }
            }
        }
    }

function watchAd() {
    document.getElementsByName('money')[0].value = money + 5;
    alert('Thank you for watching our sponsor!');
    if (cash > 0) {
    startButtonEl.classList.remove("startButtonFalse");
    }
}
