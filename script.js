const red = document.getElementById("red");
const green = document.getElementById("green");
const blue = document.getElementById("blue");

const redInput = document.getElementById("redInput");
const greenInput = document.getElementById("greenInput");
const blueInput = document.getElementById("blueInput");

const colorBox = document.getElementById("colorBox");
const rgbCode = document.getElementById("rgbCode");
const hexCode = document.getElementById("hexCode");

function updateColor(r, g, b) {
    const rgb = `rgb(${r}, ${g}, ${b})`;
    colorBox.style.backgroundColor = rgb;
    rgbCode.textContent = rgb;

    const hex =
        "#" +
        Number(r).toString(16).padStart(2, "0") +
        Number(g).toString(16).padStart(2, "0") +
        Number(b).toString(16).padStart(2, "0");

    hexCode.textContent = hex.toUpperCase();
}

// Desde sliders
function fromSliders() {
    redInput.value = red.value;
    greenInput.value = green.value;
    blueInput.value = blue.value;

    updateColor(red.value, green.value, blue.value);
}

// Desde inputs numéricos
function fromInputs() {
    red.value = redInput.value;
    green.value = greenInput.value;
    blue.value = blueInput.value;

    updateColor(redInput.value, greenInput.value, blueInput.value);
}

// Eventos sliders
red.addEventListener("input", fromSliders);
green.addEventListener("input", fromSliders);
blue.addEventListener("input", fromSliders);

// Eventos inputs
redInput.addEventListener("input", fromInputs);
greenInput.addEventListener("input", fromInputs);
blueInput.addEventListener("input", fromInputs);
