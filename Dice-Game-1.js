let resetBtn = document.getElementById("resetBtn");
let player1 = document.getElementById("player1");
let score = document.getElementById("score");
let dice = document.getElementById("dice");
let rollButton = document.getElementById("rollButton");
let one = document.getElementById("one");
let two = document.getElementById("two");
let three = document.getElementById("three");
let four = document.getElementById("four");
let five = document.getElementById("five");
let six = document.getElementById("six");
let i = 0



rollButton.addEventListener("click", () => {
    one.style.display = "none";
    two.style.display = "none";
    three.style.display = "none";
    four.style.display = "none";
    five.style.display = "none";
    six.style.display = "none";
    arrow.style.display = "none";
    let j = Math.ceil(Math.random()*6);
    console.log(j)
    i = i + j
    console.log(i)
    score.innerHTML = `<p>${i}</p>`;
        if (i >= 21) {
            player1.innerHTML = `<p>Winner!!!</p>`;
            rollButton.style.display = "none";
            resetBtn.style.display = "block";
            winner.style.display = "block"; 
            i = 0
        } else if (j == 1) {
            player1.innerHTML = `<p>Loser :(</p>`;
            one.style.display = "block";
            rollButton.style.display = "none";
            resetBtn.style.display = "block";
            i = 0
        } else if (j == 2) {      
            two.style.display = "block";  
        } else if (j == 3) {      
            three.style.display = "block";  
        } else if (j == 4) {      
            four.style.display = "block";  
        } else if (j == 5) {      
            five.style.display = "block";  
        } else if (j == 6) {      
            six.style.display = "block";  
        }
    }
)

resetBtn.addEventListener("click", () => {
    location.reload();    
    }
)
document.addEventListener("keydown", (e) => {
    if (e.key == "s" || e.key == "S") {
        location.reload();
    }
});