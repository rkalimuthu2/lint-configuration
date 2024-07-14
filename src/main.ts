import { add, subtract, multiply, divide } from './index';

const num1Input = document.getElementById('num1') as HTMLInputElement;
const num2Input = document.getElementById('num2') as HTMLInputElement;
const operationSelect = document.getElementById(
  'operation'
) as HTMLSelectElement;
const resultDiv = document.getElementById('result') as HTMLDivElement;
const calculateButton = document.getElementById(
  'calculate'
) as HTMLButtonElement;

calculateButton.addEventListener('click', () => {
  const num1 = parseFloat(num1Input.value);
  const num2 = parseFloat(num2Input.value);
  const operation = operationSelect.value;
  let result: number;

  switch (operation) {
    case 'add':
      result = add(num1, num2);
      break;
    case 'subtract':
      result = subtract(num1, num2);
      break;
    case 'multiply':
      result = multiply(num1, num2);
      break;
    case 'divide':
      result = divide(num1, num2);
      break;
    default:
      result = NaN;
  }

  resultDiv.textContent = `Result: ${result}`;
});
