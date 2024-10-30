function hideElementById(elementById) {
  const element = document.getElementById(elementById);
  element.classList.add("hidden");
}

function showElementById(elementById) {
  const element = document.getElementById(elementById);
  element.classList.remove("hidden");
}

function addElementById(elementId){
const element =document.getElementById(elementId)
element.classList.add('bg-orange-400')
}
function removeElementById(elementId){
const element =document.getElementById(elementId)
element.classList.remove('bg-orange-400')
}


function getRandomAlphabet(){
  const alphabetString='abcdefghijklmnopqrstuvwxyz'
  const alphabets=alphabetString.split('')
  // console.log(alphabets)

  const randomNumber=Math.random()*25
  const indexNumber=Math.round(randomNumber)
  // console.log(indexNumber)

  const alphabet =alphabets[indexNumber];
  return alphabet
  
}

function getTextElementValueById(elementId){
  const element = document.getElementById(elementId);
  const elementValueText = element.innerText;
  const value = parseInt(elementValueText);
  return value;
}

function setTextElementValueById(elementId, value){
  const element = document.getElementById(elementId);
  element.innerText = value;
}

function getelementTextById(elementId){
  const element=document.getElementById(elementId)
  const text =element.innerText;
  return text
}