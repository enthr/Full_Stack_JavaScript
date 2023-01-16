const num = parseInt(prompt('Enter a Number:'));
let isPrime = true;

if(num === 1) {
    console.log('1 is neither prime or composite.');
} else if(num > 1) {
    for(let i = 2; i < num-1; i++) {
        if(num % i === 0) {
            isPrime = false;
            break;
        }
    }

    (isPrime) ? alert(`${num} is a Prime Number`) : alert(`${num} is not a prime number.`); 
} else {
    console.log('The Number is not a prime number.');
}

const evenArr = [];
const oddArr = [];
let numIndex = 0

while (numIndex <= 100) {
    if(numIndex % 2 === 0) {
        evenArr.push(numIndex);
    } else {
        oddArr.push(numIndex);
    }
    numIndex++;    
}

console.log('Even Array:', evenArr);
console.log('Odd Array:', oddArr);