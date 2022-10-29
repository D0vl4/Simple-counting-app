let score = document.getElementById("score")

let num1 = 1
let num2 = 2
let num3 = 3

function num1_clicked() {
    num1 = num1 + 1
    score.textContent = num1
}

function num2_clicked() {
    num1 = num1 + 2
    score.textContent = num1
}

function num3_clicked() {
    num1 = num1 + 3
    score.textContent = num1
}

function reset_clicked() {
    location.reload()
}