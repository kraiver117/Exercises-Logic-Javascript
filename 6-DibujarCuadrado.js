// Dibujar un cuadrado hueco
// drawSquare(4);
/*
    ****
    *  *
    *  *
    ****
*/
function drawSquare(size) {
    let square = '';

    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            if (i === 0 || i === size -1) {
                square += '*';
            } else {
                if (j === 0 || j === size -1) {
                    square += '*'
                } else {
                    square += ' '
                }
            }

            if (j === size -1) square += '\n';
        }
    }
    console.log(square);
}

drawSquare(10);