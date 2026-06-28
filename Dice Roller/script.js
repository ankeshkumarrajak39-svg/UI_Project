let rollBtn = document.querySelector(".throw-btn button");
let show = document.querySelector(".show button");

rollBtn.addEventListener("click", () => {
    let num = Math.floor(Math.random() * 6) + 1;
    show.innerText = num;
});