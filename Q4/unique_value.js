let items = [7, 4, 8, 10, 1, 2, 2, 3, 4];

let unique = [];

for (let i = 0; i < items.length; i++) {
    if (!unique.includes(items[i])) {
        unique.push(items[i])
    }
}

console.log(unique)