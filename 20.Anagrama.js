function cleanText(text) {
    return text
        .replace(/[^\w]/gi, '')
        .toLowerCase()
        .split('')
        .sort()
        .join(''); 
}

function anagrams(text1, text2) {
    return cleanText(text1) === cleanText(text2);
}

console.log(anagrams("sergio", "Riesgo"));