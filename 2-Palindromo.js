/* 
    Dada una cadena de texto, comprobar si es un palindromo o no.
    Los palindromos son palabras que se leen igual aun estando invertidas
    Por ejemplo: ana, bob, otto, allivessevilla

    No tener en cuenta espacios o simbolos raros
*/

function palindrome(word) {
    let originalWord = word;
    let invertedWord = [];
    word = word.split('');

    for (let i = word.length - 1  ; i >= 0; i--) {
        invertedWord[(word.length - 1) - i] = word[i];
    }

    invertedWord = invertedWord.join('');

    console.log(invertedWord);
    console.log(originalWord);

    if (originalWord === invertedWord) {
        console.log('Es un palindromo');
    } else {
        console.log('No es un palindromo');
    }
}

palindrome('Angel');