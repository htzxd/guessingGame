const screenOne = document.querySelector(".screenOne")
const screenTwo = document.querySelector(".screenTwo")
const randomNumber = Math.round(Math.random() * 10)
let xAttemps = 1

function handleTryClick(event) {
  event.preventDefault()
  
  const inputNumber = document.querySelector("#inputNumber")
  
  if(Number(inputNumber.value) == randomNumber) {
    screenOne.classList.add("hide")
    screenTwo.classList.remove("hide")
    
    document
      .querySelector(".screenTwo h2")
      .innerText = (`Got it right ${xAttemps} tries!`)
    
  }
  inputNumber.value = ""
  xAttemps++
}

const btnTry = document.querySelector('#btnTry')
const btnAgain = document.querySelector("#btnAgain")

btnTry.addEventListener('click', handleTryClick)
btnAgain.addEventListener('click', function() {
  screenOne.classList.remove("hide")
  screenTwo.classList.add("hide")
  xAttemps = 1
})
