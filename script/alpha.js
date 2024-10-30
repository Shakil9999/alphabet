// function playNow(){
//     const homeSection= document.getElementById('home-screen');
//     homeSection.classList.add('hidden')

//     const playGround=document.getElementById('play-ground')
//     playGround.classList.remove('hidden')
// }

function KeybordButtonPress(event) {
    const gammerPressed = event.key.toLowerCase(); // Convert to lowercase for comparison
    console.log('Gammer pressed', gammerPressed);

if(gammerPressed==='escape'){
gameOver();
}

    const currentAlphabetElement = document.getElementById('set-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText.toLowerCase(); // Ensure case consistency
    console.log(gammerPressed, currentAlphabet);

    const currentScoreElement = document.getElementById('current-score');
    const currentLifeElement = document.getElementById('current-life');

    if (gammerPressed === currentAlphabet) {
        console.log('You got a point');

        const currentScoreText = currentScoreElement.innerText;
        const currentScore = parseInt(currentScoreText, 10);
        const newScore = currentScore + 1;
        currentScoreElement.innerText = newScore;

        removeElementById(currentAlphabet); // Assuming this function removes the correct element
        continueGame(); // Proceed to the next game state
    } else {
        console.log('You missed');
        
        const currentLifeText = currentLifeElement.innerText;
        const currentLife = parseInt(currentLifeText, 10);
        
        const newLife = currentLife - 1; // Define newLife here
        currentLifeElement.innerText = newLife;

        // Check if lives are exhausted
        if (newLife === 0) {
           gameOver();
            
        }
    }
}


document.addEventListener('keyup', KeybordButtonPress)









function continueGame(){
const alphabet=getRandomAlphabet()
console.log(alphabet)

const setAlphabet =document.getElementById('set-alphabet')
setAlphabet.innerText=alphabet;

addElementById(alphabet)

}




function playNow(){
    hideElementById('home-screen')
    hideElementById('final-score')
    showElementById('play-ground')

    setTextElementValueById('current-life', 5)
    setTextElementValueById('current-score', 0)
    continueGame()
}

function gameOver(){
    hideElementById('play-ground')
    showElementById('final-score')

    // const finalScore= getTextElementValueById('current-score')
    // setTextElementValueById('gamelast-score"',finalScore)
    const lastScore=getTextElementValueById('current-score')
     setTextElementValueById('gamelast-score', lastScore)

const alphabet = getelementTextById('set-alphabet')
removeElementById(alphabet)

}

function playAgain(){
    
    
}
