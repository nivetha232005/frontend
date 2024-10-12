const display = document.querySelector('.display');
let currentInput = '';

const calculate = (expression) => {
    try {
        return Function('"use strict";return (' + expression + ')')();
    } catch (e) {
        return 'Error';
    }
};

document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;

        if (/\d|\./.test(value)) { 
            currentInput += value; 
            display.value = currentInput; 
        } else if (value === 'C') {
            currentInput = '';
            display.value = '';
        } else if (value === 'Del') {
            currentInput = currentInput.slice(0, -1); 
            display.value = currentInput; 
        } else if (value === '+/-') {
            
            if (currentInput) {
                currentInput = (parseFloat(currentInput) * -1).toString();
                display.value = currentInput;
            }
        } else if (value === '=') {
            if (currentInput) {
                const result = calculate(currentInput); 
                display.value = result;
                currentInput = result.toString(); 
            }
        } else {
            if (currentInput !== '') {
                currentInput += value;
                display.value = currentInput; 
            }
        }
    });
});
