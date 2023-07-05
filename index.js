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

function hiddenMessage() {
    const msg = document.getElementsByClassName("wagerMessage");
    document.getElementsByClassName("wagerMessage").hidden = true
}

function checkMoney() {
    var money = parseInt(document.getElementsByName('money')[0].value)
}
//========================================================================//

function spin() {

    var wager = parseInt(document.getElementsByName('wager')[0].value);
    var money = parseInt(document.getElementsByName('money')[0].value);

    if (money > 0) 
    document.getElementsByName('money')[0].value = money - wager;

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

function checkWager() {
    var wager = parseInt(document.getElementsByName('wager')[0].value)
    if (isNaN(wager)){
        const msg = document.getElementById("cantBeOther");
        document.getElementById("cantBeOther").hidden = false
    } else {
        if (wager <= 0){
            const msg = document.getElementById("cantBeZero");
            document.getElementById("cantBeZero").hidden = false
        } else {
            if(wager > parseInt(document.getElementsByName('money')[0].value)){
                const msg = document.getElementById("toHigh");
                document.getElementById("toHigh").hidden = false
            } else {
                hiddenMessage();
            }		
        }
    }
}

function watchAd() {
    document.getElementsByName('money').value = money + 30;
    alert('Thank you for watching our sponsor!');
    console.log(money+30);
}