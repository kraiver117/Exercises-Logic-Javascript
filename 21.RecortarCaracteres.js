function splitSetence(text, limit) {
    if (typeof text === 'string' && typeof limit === 'number') {
        return text.substring(0, limit).trim()
    } else {
        return "Introduce un texto y un limite";
    }
}

console.log(splitSetence("Hola mundo!", 30));