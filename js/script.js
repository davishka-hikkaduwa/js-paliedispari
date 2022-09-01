console.log('JS OK!');



// ----- PALINDROMA ----- 
/*
//chiedi al utente una parola

const word = prompt('Enter a word: ');

//invocare la funzione

const value = checkForPalindrome(word);

console.log(value);

//vedere se la parola inserita e una palindroma

function checkForPalindrome(word) {
    let wordLength = word.length;

    for (let i = 0; i < wordLength / 2; i++) {
        if (word[i] !== word[wordLength - 1 - i]) {
            return 'Your word is not a palindrome';
        }
        return 'Your word is a palindrome'
    }
}

*/

const word = prompt('Enter a word: ');

const isPalindroma = checkPalindrome(word);

function checkPalindroma(text) {
    console.log(text);
    console.log(text.charAt[0]);

    let reversedText = '';

    for (let i = 0; i < text.length; i++) {
        const char = text.charAt(i);

        reversedText = char + reversedText;
        console.log(reversedText);

    }



    // const isEqual = reversedText === text;
    // return isEqual;


    //versione 2
    console.log('versione 2');
    reversedText = '';

    for (let i = text.length - 1; i >= 0; i--) {
        const element = array[i];

        const char = text.charAt[i];
        reversedText = reversedText + char;
        console.log(reversedText);
    }

    //versione 3
    console.log('versione 3');

    const arrayText = text.split('');

    const reversedArray = arrayText.reverse();

    reversedText = reversedArray.join('');



    console.log('reversedText', reversedText);

    const isEqual = reversedText === text;

    return isEqual;
}





