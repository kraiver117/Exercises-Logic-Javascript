// Ejemplo vocales("victorroblesweb.es") // OUTPUT: 6

function vowels (text) {
    const coincidences = text.match(/[aeiou]/gi);
    // console.log(coincidences);

    if (coincidences && coincidences.length > 0 ) {
        return coincidences.length;
    } else {
        return 0;
    }
}

console.log(vowels("victorroblesweb.es"));
console.log(vowels("nnn"));
