// Truthy
const a = 1;
const b = '1';
const c = [1];

console.log(a == b);
console.log(a == c);
console.log(b == c);

// Falsy
console.log(NaN == NaN);
console.log(false == null);
console.log(false == undefined);