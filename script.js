function appendValue(value) {
    document.getElementById('display').value += value;
}

function calculate() {
    try {
        document.getElementById('display').value = eval(document.getElementById('display').value);
    } catch (error) {
        document.getElementById('display').value = 'Chyba';
    }
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function handleInput() {
    document.getElementById('display').value = document.getElementById('display').value.replace(/[^-/*+.0-9]/g, '');
}

function calculateFunction(func) {
    let input = parseFloat(document.getElementById('display').value);
    let result;

    switch (func) {
        case 'factorial':
            result = faktorial(input);
            break;
        case 'fibonacci':
            result = ziskejFibonacciPosloupnost();
            break;
        case 'cosine':
            result = Math.cos(input);
            break;
        case 'sine':
            result = Math.sin(input);
            break;
        case 'log':
            result = Math.log10(input);
            break;
        default:
            result = 'Neplatná funkce';
    }

    document.getElementById('display').value = result;
}

function faktorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * faktorial(n - 1);
    }
}

function ziskejFibonacciPosloupnost() {
    let posloupnost = [];
    for (let i = 0; i < 10; i++) {
        posloupnost.push(fibonacci(i));
    }
    return posloupnost.join(', ');
}

function fibonacci(n) {
    if (n <= 1) {
        return n;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

