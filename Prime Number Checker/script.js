let number = document.querySelector("#num");
let checkbtn = document.querySelector("#checkbtn");
let p = document.querySelector("#show");
let refreshbtn=document.querySelector("#refreshbtn");

function isPrime(num) {
    if (num <= 1) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }

    return true;
}

checkbtn.addEventListener("click", () => {
    const num = Number(number.value);

    if (isPrime(num)) {
        p.innerText = `${num} is Prime`;
    } else {
        p.innerText = `${num} is Not Prime`;
    }
});
refreshbtn.addEventListener("click",()=>{
    number.value = "";
    p.innerText = "";

});