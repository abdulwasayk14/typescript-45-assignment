let fruit = 'apple';

// Test 1: Is fruit equal to 'apple'?
console.log("Is fruit == 'apple'? I predict True.");
console.log(fruit == 'apple');

// Test 2: Is fruit not equal to 'banana'?
console.log("Is fruit != 'banana'? I predict True.");
console.log(fruit != 'banana');

// Test 3: Is fruit equal to 'banana'?
console.log("Is fruit == 'banana'? I predict False.");
console.log(fruit == 'banana');
let country = 'United States';

// Test 4: Is country in lower case equal to 'united states'?
console.log("Is country.toLowerCase() == 'united states'? I predict True.");
console.log(country.toLowerCase() == 'united states');

// Test 5: Is country in lower case not equal to 'united kingdom'?
console.log("Is country.toLowerCase() != 'united kingdom'? I predict True.");
console.log(country.toLowerCase() != 'united kingdom');
let num1 = 10;
let num2 = 20;

// Test 6: Is num1 equal to 10?
console.log("Is num1 == 10? I predict True.");
console.log(num1 == 10);

// Test 7: Is num1 not equal to 20?
console.log("Is num1 != 20? I predict True.");
console.log(num1 != 20);

// Test 8: Is num2 greater than num1?
console.log("Is num2 > num1? I predict True.");
console.log(num2 > num1);

// Test 9: Is num1 less than or equal to num2?
console.log("Is num1 <= num2? I predict True.");
console.log(num1 <= num2);
let isSunny = true;
let isWarm = false;

// Test 10: Is it sunny and warm?
console.log("Is it sunny and warm? I predict False.");
console.log(isSunny && isWarm);

// Test 11: Is it sunny or warm?
console.log("Is it sunny or warm? I predict True.");
console.log(isSunny || isWarm);
let fruits = ['apple', 'banana', 'orange'];

// Test 12: Is 'banana' in the fruits array?
console.log("Is 'banana' in the fruits array? I predict True.");
console.log(fruits.includes('banana'));

// Test 13: Is 'grape' in the fruits array?
console.log("Is 'grape' in the fruits array? I predict False.");
console.log(fruits.includes('grape'));
// Test 14: Is 'kiwi' not in the fruits array?
console.log("Is 'kiwi' not in the fruits array? I predict True.");
console.log(!fruits.includes('kiwi'));

// Test 15: Is 'apple' not in the fruits array?
console.log("Is 'apple' not in the fruits array? I predict False.");
console.log(!fruits.includes('apple'));