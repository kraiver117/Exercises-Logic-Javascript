// For a = [16, 1, 4, 2, 14], b = [7, 11, 2, 0, 15], and k = 743, the output should be

// countTinyPairs(a, b, k) = 4.

// We're considering the following pairs during iteration:

// (16, 15). Their concatenation equals 1615, which is greater than 743, so the pair is not tiny;

// (1, 0). Their concatenation equals 10, which is less than 743, so the pair is tiny;

// (4, 2). Their concatenation equals 42, which is less than 743, so the pair is tiny.

// (2, 11). Their concatenation equals 211, which is less than 743, so the pair is tiny;

// (14, 7). Their concatenation equals 147, which is less than 743, so the pair is tiny.

// There are 4 tiny pairs during the iteration, so the answer is 4.

// Input/Output

let a = [16, 1, 4, 2, 14];
let b = [7, 11, 2, 0, 15];
let k = 743;

function countTinyPairs(a, b , k) {
    let tinyNumbers = 0;
    let concatedNumbers = ''

    for (let i = 0; i < a.length; i++) {
        concatedNumbers = a[i].toString() + b[b.length  - ( i + 1)].toString();

        if(Number(concatedNumbers) < k) {
            tinyNumbers += 1;
        }
        
    }
    
    return tinyNumbers;

}

console.log(countTinyPairs(a, b, k));
