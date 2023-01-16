const primeNums = [];

const isPrime = (num) => {
    // if Number is 0 or 1 not Prime
    if (num === 0 || num === 1) return false;

    // if Number is divisible any number from 2 to n/2 then not prime number. 
    for (let i = 2; i <= num / 2; i++) {
        if (num % i === 0) return false;
    }

    // Otherwise, Prime Number
    return true;
}

const num = parseInt(prompt('Enter a Number For Max Prime Number Range:'));
for (let i = 1; i <= num; i++) {
    if (isPrime(i)) primeNums.push(i);
}

console.log(primeNums);

const p1 = parseInt(prompt('Enter Number of Lines For Pattern'));
for(let i = 1; i <= p1; i++) {
    console.log('*'.repeat(i));
}

const p2 = parseInt(prompt('Enter Number of Lines For Pattern'));
for(let j = 1; j <= p2; j++) {
    console.log('*'.repeat(p2));
}

const p3 = parseInt(prompt('Enter a Number of Lines For Pattern'));
for(let i = 1; i <= p3; i++) {

    console.log(' '.repeat(p3 - i) + '*'.repeat(((2*i)-1)) + ' '.repeat(p3 - i));
}
