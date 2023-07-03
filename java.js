function getRandomNumber() {
    return Math.floor(Math.random() * 4) +1;
}

function getElement(id) {
    return document.getElementById(id);
}

function winMessage() {
    //Display message when player gets combo, if not hide the message// 
}

function spin() {
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
        //Play a message and maybe play a sound?// 
    }
}