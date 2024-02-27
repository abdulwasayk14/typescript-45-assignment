// Array of favorite fruits
let favorite_fruits: string[] = ['apple', 'banana', 'mango'];

// Check for certain fruits in the array
if (favorite_fruits.includes('apple')) {
    console.log("You really like apples!");
}

if (favorite_fruits.includes('banana')) {
    console.log("You really like bananas!");
}

if (favorite_fruits.includes('mango')) {
    console.log("You really like mangoes!");
}

if (favorite_fruits.includes('orange')) {
    console.log("You really like oranges!");
} else {
    console.log("You don't have oranges in your favorite fruits.");
}

if (favorite_fruits.includes('strawberry')) {
    console.log("You really like strawberries!");
} else {
    console.log("You don't have strawberries in your favorite fruits.");
}
