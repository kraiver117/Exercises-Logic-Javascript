function buzz(limit) {
    for (let i = 1; i <= limit; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("BuzzLightyear");

        } else if (i % 3 === 0) {
            console.log("buzz");
        }
        else if (i % 5 === 0) {
            console.log("lightyear");
        } else {
            console.log(i);
        }

    }
}

buzz(50);