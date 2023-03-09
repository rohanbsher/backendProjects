function calculateFactorial(num: number): number {
	if (num === 0) {
	  return 1;
	} else {
	  let result = num * calculateFactorial(num - 1);
	  return result;
	}
  }

  const numInput = document.getElementById('num-input') as HTMLInputElement;
  const btnCalculate = document.getElementById('btn-calculate') as HTMLButtonElement;
  const output = document.getElementById('output') as HTMLDivElement;
  
  function displayOutput(num: number): void {
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
  