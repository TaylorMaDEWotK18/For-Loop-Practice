// In this exercise we're dynamicably displaying html in a loop 

const main = document.querySelector('main');
let html = '';

for ( let i = 1; i <= 100; i++) {
    html += `<div>${i}</div>`;
}

main.innerHTML = html;