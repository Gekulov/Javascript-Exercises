

const tree = (n) => {
    let emptySpace = "";

    for (i = 0; i < n; i++) {
        emptySpace = "";
        for (j = i; j < n; j++) {
            emptySpace += " ";
        }
        for (k = 0; k < (i * 2) - 1; k++) {
            emptySpace += "*";

        }
        console.log(emptySpace);
    }
    console.log(" ".repeat(((i * 2) - 1) / 2) + "*");

}

tree(9)