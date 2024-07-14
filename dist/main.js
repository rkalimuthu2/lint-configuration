"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./index");
var num1Input = document.getElementById('num1');
var num2Input = document.getElementById('num2');
var operationSelect = document.getElementById('operation');
var resultDiv = document.getElementById('result');
var calculateButton = document.getElementById('calculate');
calculateButton.addEventListener('click', function () {
    var num1 = parseFloat(num1Input.value);
    var num2 = parseFloat(num2Input.value);
    var operation = operationSelect.value;
    var result;
    switch (operation) {
        case 'add':
            result = (0, index_1.add)(num1, num2);
            break;
        case 'subtract':
            result = (0, index_1.subtract)(num1, num2);
            break;
        case 'multiply':
            result = (0, index_1.multiply)(num1, num2);
            break;
        case 'divide':
            result = (0, index_1.divide)(num1, num2);
            break;
        default:
            result = NaN;
    }
    resultDiv.textContent = "Result: ".concat(result);
});
