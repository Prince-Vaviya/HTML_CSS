let value = 0;

function incrementBtn() {
    value++;
    document.getElementById("value").innerHTML = value;
}

function decrementBtn() {
    value--;
    document.getElementById("value").innerHTML = value;
}

function resetBtn() {
    value = 0;
    document.getElementById("value").innerHTML = value;
}