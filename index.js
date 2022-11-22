const frontCard= document.querySelector('.front')
const thanksCard = document.querySelector('.thanks')



const numberOne = document.querySelector('#ChoiceOne')
const numberTwo = document.querySelector('#ChoiceTwo')
const numberThree = document.querySelector('#ChoiceThree')
const numberFour = document.querySelector('#ChoiceFour')
const numberFive = document.querySelector('#ChoiceFive')
const reviewResult = document.querySelector(".reviewResult")

const buttonSubmit = document.querySelector('.submit')



numberOne.addEventListener('click',() => {
    
    reviewResult.innerHTML = ('You selected 1 out of 5')
})
numberTwo.addEventListener('click',() => {
    reviewResult.innerHTML = ('You selected 2 out of 5')
})
numberThree.addEventListener('click',() => {
    reviewResult.innerHTML = ('You selected 3 out of 5')
})
numberFour.addEventListener('click',() => {
    reviewResult.innerHTML = ('You selected 4 out of 5')
})
numberFive.addEventListener('click',() => {
    reviewResult.innerHTML = ('You selected 5 out of 5')
})   

buttonSubmit.addEventListener('click',()=>{
    frontCard.classList.add("hide")
    thanksCard.classList.remove('hide')
})
