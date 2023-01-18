const operations = {
    1: 'Addition',
    2: 'Subtraction',
    3: 'Multiplication',
    4: 'Division',
    5: 'Clear Accumulator',
    6: 'Clear Current Numbers',
    7: 'Exit'
}

let performOperation = 0;
let enterNum1 = 0;
let enterNum2 = 0;
let accumulator = 0;

while(performOperation !== 7) {
    alert('Operations:\n1 = Addition\n2 = Subtraction\n3 = Multiplication\n4 = Division\n5 = Clear Accumulator\n6 = Clear Current Numbers\n7 = Exit\n');

    performOperation = parseInt(prompt('Enter Which Operation in Digit:'));

    if(performOperation >= 1 && performOperation <= 4) {
        enterNum1 = parseFloat(prompt('Enter Number 1:'));
        enterNum2 = parseFloat(prompt('Enter Number 2:'));
    }

    switch(performOperation) {
        case 1:
            accumulator = enterNum1 + enterNum2;
            alert(`Result: ${accumulator}`);
            break;
        case 2:
            accumulator = enterNum1 - enterNum2;
            alert(`Result: ${accumulator}`);
            break;
        case 3:
            accumulator = enterNum1 * enterNum2;
            alert(`Result: ${accumulator}`);
            break;
        case 4:
            accumulator = enterNum1 / enterNum2;
            alert(`Result: ${accumulator}`);
            break;
        case 5:
            accumulator = 0;
            alert(`Accumulator: ${accumulator}`);
            break;
        case 6:
            enterNum1 = 0;
            enterNum2 = 0;
            alert(`Current Numbers: ${enterNum1}, ${enterNum2}`);
            break;
        case 7:
            alert('Exit');
            break;
        default:
            alert('Invalid Operation');
            break;
    }
}