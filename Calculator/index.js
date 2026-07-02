const display = document.querySelector(".display-section p");
const keypad = document.querySelector(".key-number");

let expression = "";

// Display update
function updateDisplay() {
    display.innerText = expression || "0";
}

// Input handle function
function handleInput(value) {

    if (value === "C" || value === "Escape") {
        expression = "";
    }

    else if (value === "X" || value === "Backspace") {
        expression = expression.slice(0, -1);
    }

    else if (value === "=" || value === "Enter") {
        try {
            expression = eval(expression).toString();
        } catch {
            expression = "Error";
        }
    }

    else if (value === "sq") {
        if (expression !== "") {
            expression = (Number(expression) ** 2).toString();
        }
    }

    else if ("0123456789+-*/.%".includes(value)) {
        expression += value;
    }

    updateDisplay();
}

// Mouse Click
keypad.addEventListener("click", (e) => {

    if (e.target.tagName !== "BUTTON") return;

    handleInput(e.target.innerText);

});

// Keyboard
document.addEventListener("keydown", (e) => {

    const key = e.key;

    if (
        "0123456789".includes(key) ||
        "+-*/.%".includes(key)
    ) {
        handleInput(key);
    }

    else if (
        key === "Enter" ||
        key === "Backspace" ||
        key === "Escape"
    ) {
        e.preventDefault();
        handleInput(key);
    }

});

updateDisplay();