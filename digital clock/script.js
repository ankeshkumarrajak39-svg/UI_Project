let clock = document.querySelector(".container");

function updateClock() {
    let now = new Date();

    let hours = String(now.getHours()).padStart(2, "0");
    let minutes = String(now.getMinutes()).padStart(2, "0");
    let seconds = String(now.getSeconds()).padStart(2, "0");

    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

// Page load hote hi current time show kare
updateClock();

// Har 1 second baad time update kare
setInterval(updateClock, 1000);