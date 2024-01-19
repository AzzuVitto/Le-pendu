let letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
let words = ['SAXOPHONISTE', 'ORDINATEUR', 'COQUELICOT', 'CHANSON', 'APPARTEMENT', 'HOBBIT', 'BATEAU', 'IMMEUBLE', 'PARAPLUIE', 'PELOUSE']
let cpuword = "";
let hidden = "";
let hangmanCount = 1;
let hangmanImg = document.querySelector("#pendu img")

function showElements(i) {
    let container = document.querySelector("#lettersContainer")

    letters.forEach((letter) => {
        let para = document.createElement('p')
        para.classList.add("circle")
        para.addEventListener('click', () => {
            reply(letter)
            displayHangman(letter)
        })
        para.innerHTML = letter
        container.appendChild(para)
    })
}
function wordChoice() {
    hangmanCount = 1
    let empty = ""
    let underScore = document.querySelector("#underScoreContainer")
    let cpuChoice = Math.floor(Math.random() * (words.length - 1 - 0 + 1)) + 0;
    cpuword = words[cpuChoice]
    console.log(cpuword)
    for (let i = 0; i < words[cpuChoice].length; i++) {
        empty += "_"
    }
    hidden = empty
    underScore.innerHTML = empty
}
wordChoice()

showElements()

function reply(letter) {
    let str = ""

    for (let i = 0; i < cpuword.length; i++) {
        if (letter == cpuword[i]) {
            str += letter
        } else {
            str += hidden[i]
        }
    }
    hidden = str
    document.querySelector("#underScoreContainer").innerHTML = str
}
function displayHangman(letter) {
    if (!cpuword.includes(letter) && hangmanCount <= 7) {

        bird.style.display = "none"
        bird.style.display = "block"
        hangmanImg.src = `./assets/images/p${hangmanCount}.png`
        hangmanCount++
    }
    endGame()
}

function endGame() {
    if (hangmanCount >= 8) {
        underScoreContainer.innerHTML = "Game over"
        document.querySelector("#lettersContainer").innerHTML = ""

    }
    else if (hidden == cpuword) {
        underScoreContainer.innerHTML = "Bravo, tu as gagné!"
        document.querySelector("#lettersContainer").innerHTML = ""
    }
}
