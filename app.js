var choice=['Rock','Paper','Scissors']
const computerchoiceDisplay=document.getElementById("computer-choice")
const yourchoiceDisplay=document.getElementById("your-choice")
const resultDisplay=document.getElementById("result")
const possibleChoices=document.querySelectorAll('button')
let userChoice
let compChoice
possibleChoices.forEach(possibleChoice => {
    addEventListener('click',function (e) {
        userChoice=e.target.innerHTML
        yourchoiceDisplay.innerHTML=userChoice
        compChoice=Math.floor(Math.random()*3)
        compChoice=choice[compChoice]
        computerchoiceDisplay.innerHTML=compChoice
        getResult()
    })
});
function getResult() {
    if (compChoice===userChoice) {
        resultDisplay.innerHTML="It's A draw"
    }
    if (compChoice==='Rock' && userChoice==='Paper') {
        resultDisplay.innerHTML="You Win"
    }
    if (compChoice==='Rock' && userChoice==='Scissors') {
        resultDisplay.innerHTML="You Loose"
    }
    if (compChoice==='Paper' && userChoice==='Rock') {
        resultDisplay.innerHTML="You Loose"
    }
    if (compChoice==='Paper' && userChoice==='Scissors') {
        resultDisplay.innerHTML="You Win"
    }
    if (compChoice==='Scissors' && userChoice==='Paper') {
        resultDisplay.innerHTML="You Loose"
    }
    if (compChoice==='Scissors' && userChoice==='Rock') {
        resultDisplay.innerHTML="You Win"
    }
}