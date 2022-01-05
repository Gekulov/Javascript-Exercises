let count = 1;

const reapinigLetters = (word) => {

    const arr = word.split("");
    let map = new Map();
    for (let i = 0; i < arr.length; i++) {
        if (!map.has(arr[i])) {
            map.set(arr[i], count)
        } else {
            map.set(arr[i], map.get(arr[i]) + 1)
        }
    }
    console.log(map)
}

reapinigLetters("abaabasbbbbbbb");