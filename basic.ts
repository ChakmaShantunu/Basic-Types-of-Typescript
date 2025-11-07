let age: number = 25;
age = 30;
let price: number = 99.99;
price = 100;
let temperature: number = -5;

if (age >= 18) {
    console.log("You are an adult");
} else {
    console.log("You are a minor");
}

if (temperature < 0) {
    console.log("It's freezing cold");
}

console.log(age + 5);
console.log(price * 2);

function add(a: number, b: number): number {
    return a + b;
}

const result = add(5, 10);
console.log(result);

let scores: number[] = [90, 85, 78, 95];
const total = scores.reduce((acc, current) => {
    return acc + current
}, 0);
console.log(total);
console.log("Average:", total / scores.length);