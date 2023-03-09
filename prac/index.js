"use strict";
function calculateFactorial(num) {
    if (num === 0) {
        return 1;
    }
    else {
        let result = num * calculateFactorial(num - 1);
        return result;
    }
}
const numInput = document.getElementById('num-input');
const btnCalculate = document.getElementById('btn-calculate');
const output = document.getElementById('output');
function displayOutput(num) {
    output.innerHTML += `${num} x `;
}
btnCalculate.addEventListener('click', () => {
    let num = parseInt(numInput.value);
    let result = calculateFactorial(num);
    output.innerHTML = `Factorial of ${num}: `;
    displayOutput(num);
    while (num > 1) {
        num--;
        displayOutput(num);
    }
    output.innerHTML += `1 = ${result}`;
});
// export default calculateFactorial;
