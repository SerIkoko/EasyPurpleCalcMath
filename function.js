let expression = '';
let previousExpression = '';

function appendToDisplay(value) {
    // Prevents entering two consecutive operators
    const lastChar = expression.charAt(expression.length - 1);
    if (['+', '-', '*', '/'].includes(lastChar) && ['+', '-', '*', '/'].includes(value)) {
        return; // Do not add the operator if the last character is already an operator
    }

    // Add the value to the expression
    expression += value;
    updatePreview();
}

function clearDisplay() {
    expression = '';
    previousExpression = '';
    document.getElementById('display').value = '';
    document.getElementById('preview').value = '';
}

function updatePreview() {
    // Shows the preview of the result in the preview field
    try {
        const result = eval(expression);
        document.getElementById('preview').value = result;
    } catch (e) {
        document.getElementById('preview').value = '';
    }

    // Displays the full expression in the display
    document.getElementById('display').value = expression;
}

function calculateResult() {
    try {
        expression = eval(expression).toString();
        document.getElementById('display').value = expression;
        document.getElementById('preview').value = '';
    } catch (e) {
        document.getElementById('display').value = 'Error';
        document.getElementById('preview').value = '';
    }
}
