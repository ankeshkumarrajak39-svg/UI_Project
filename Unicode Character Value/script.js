let input = document.querySelector("#charInput");
let checkBtn = document.querySelector("#getUnicode");
let output = document.querySelector("#output");
let refresh = document.querySelector("#refreshBtn");

checkBtn.addEventListener("click", () => {
    let ch = input.value;

    if (ch.length > 0) {
        output.innerText = ch.charCodeAt(0);
    } else {
        output.innerText = "Please enter a character.";
    }
});

refresh.addEventListener("click", () => {
    input.value = "";
    output.innerText = "";
});