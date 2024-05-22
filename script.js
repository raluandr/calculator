let display = document.getElementById('display');
let currentInput = '';
let operator = '';
let firstOperand = '';
let secondOperand = '';

function appendCharacter(char) {
    if (char === '/' || char === '*' || char === '-' || char === '+') {
        if (operator) {
            calculateResult();
        }
        operator = char;
        firstOperand = currentInput.replace(/,/g, ''); 
        currentInput = '';
    } else {
        if (char === ',') {
            
            return;
        } else if (char === '.' && currentInput.includes('.')) {
            
            return;
        }
        currentInput += char;
        currentInput = formatNumber(currentInput.replace(/,/g, ''));
    }
    updateDisplay();
}

function clearDisplay() {
    currentInput = '';
    operator = '';
    firstOperand = '';
    secondOperand = '';
    updateDisplay();
}

function updateDisplay() {
    display.innerText = currentInput || '0';
}

function calculateResult() {
    if (!operator || !currentInput) return;
    secondOperand = currentInput.replace(/,/g, ''); 
    switch (operator) {
        case '/':
            result = parseFloat(firstOperand) / parseFloat(secondOperand);
            break;
        case '*':
            result = parseFloat(firstOperand) * parseFloat(secondOperand);
            break;
        case '-':
            result = parseFloat(firstOperand) - parseFloat(secondOperand);
            break;
        case '+':
            result = parseFloat(firstOperand) + parseFloat(secondOperand);
            break;
    }
    currentInput = formatNumber(result.toString());
    operator = '';
    firstOperand = '';
    secondOperand = '';
    updateDisplay();
}

function formatNumber(num) {
    
    const parts = num.split('.');
    
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
   
    return parts.join('.');
}
