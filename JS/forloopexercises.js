//Execise 1) - Using a for loop print all even numbers up to and including n. Don’t include 0.

let n1 = 22; 
const main = document.querySelector('main');
let final = `<h1>Hey look Ma! I got some evens!</h1>`;

for ( let i = 2; i <= n1; i += 2) {
    final += `<div>${i}</div>`;
    console.log(i);
}

main.innerHTML = final;

// Example output: 
// 2 4 6 8 10 12 14 16 18 20 22 OR each item on a new line