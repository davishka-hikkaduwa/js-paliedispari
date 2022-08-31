console.log('JS OK!');



// ----- PALINDROMA ----- 

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


