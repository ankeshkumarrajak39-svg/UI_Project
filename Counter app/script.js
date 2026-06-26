const incrementBtn = document.querySelector(".increment-btn");
const decrementBtn = document.querySelector(".decrement-btn");
const showBtn = document.querySelector(".show");
const resetBtn = document.querySelector(".reset-btn button");
let count=0;
showBtn.textContent = count;

incrementBtn.addEventListener("click",()=>{
    count++;
    showBtn.textContent=count;
    
});
decrementBtn.addEventListener("click",()=>{
    count--;
    showBtn.textContent=count;
});
resetBtn.addEventListener("click",()=>{
    count=0;
    showBtn.textContent=count;
});