
// Function to append values to the display
function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

// Function to calculate the result of the expression
function calculateResult() {
    try {
        let expression = document.getElementById('display').value;
        document.getElementById('display').value = eval(expression);
    } catch (e) {
        document.getElementById('display').value = "Error";
    }
}

// Function to clear the display
function clearDisplay() {
    document.getElementById('display').value = '';
}

// Function to delete the last character
function deleteLast() {
    let currentValue = document.getElementById('display').value;
    document.getElementById('display').value = currentValue.slice(0, -1);
}

// Function to calculate square root
function sqrt() {
    let value = document.getElementById('display').value;
    document.getElementById('display').value = Math.sqrt(value);
}

// Function for sine
function sin() {
    let value = document.getElementById('display').value;
    document.getElementById('display').value = Math.sin(toRadians(value));
}

// Function for cosine
function cos() {
    let value = document.getElementById('display').value;
    document.getElementById('display').value = Math.cos(toRadians(value));
}

// Function for tangent
function tan() {
    let value = document.getElementById('display').value;
    document.getElementById('display').value = Math.tan(toRadians(value));
}

// Function to calculate logarithm (base 10)
function log() {
    let value = document.getElementById('display').value;
    document.getElementById('display').value = Math.log10(value);
}

// Function to negate the number
function negate() {
    let value = document.getElementById('display').value;
    if (value) {
        document.getElementById('display').value = value.startsWith('-') ? value.slice(1) : '-' + value;
    }
}

// Function to calculate percentage
function percent() {
    let value = document.getElementById('display').value;
    if (value) {
        document.getElementById('display').value = parseFloat(value) / 100;
    }
}

// Helper function to convert degrees to radians
function toRadians(degrees) {
    return degrees * Math.PI / 180;
}