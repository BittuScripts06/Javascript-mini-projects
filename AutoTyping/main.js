
const span = document.querySelector('span');
const wordsList = ['Developer', 'Coder', 'YouTuber','Engineer'];

const word = 'Developer';

let wordIndex=0;

let characterIndex = 0;
let reverseType = false;


const intervalId = setInterval(() => {
    
    if(wordIndex===wordsList.length){
        wordIndex=0;
    }


    if (!reverseType) {
        span.innerText = span.innerText + wordsList[wordIndex][characterIndex];
        characterIndex++;

    }
    else{
        span.innerText=span.innerText.slice(0,span.innerText.length-1);
    }

    if(span.innerText.length===0 && reverseType){
        reverseType=false;
        characterIndex=0;
        wordIndex++;
    }
    
    if (characterIndex === wordsList[wordIndex].length) {
        reverseType = true;
    }


}, 200);
