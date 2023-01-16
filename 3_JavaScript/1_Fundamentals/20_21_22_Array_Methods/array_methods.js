const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];

shoppingCart.unshift('Meat');

shoppingCart.push('Sugar');

const honeyIndex = shoppingCart.lastIndexOf('Honey');
shoppingCart.splice(honeyIndex, 1);

const teaIndex = shoppingCart.lastIndexOf('Tea');
shoppingCart.splice(teaIndex, 1, 'Green Tea');

console.log(shoppingCart);

const countries = ["Bharat", "Japan", "USA", "Netherlands", "Taiwan", "South Korea", "Israel"];

if (countries.includes('Ethiopia')) {
    console.log('Ethiopia');
} else {
    console.log(countries);
    countries.push('Ethiopia');
    console.log(countries);
}

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
console.log(ages);

ages.sort();
console.log(ages);
console.log(`Min Age: ${ages[0]} and Max Age: ${ages[ages.length - 1]}`);

if (ages.length % 2 === 0) {
    const medianAge = (ages[(ages.length / 2) - 1] + ages[ages.length / 2]) / 2;
    console.log(`Median Age: ${medianAge}`);
} else {
    const medianAge = ages[floor(ages.length / 2)];
    console.log(`Median Age: ${medianAge}`);
}

const averageAge = ages.reduce((accumulator, currentValue) => accumulator + currentValue, 0) / ages.length;
console.log(`Average Age: ${averageAge}`);

console.log(`Range: ${ages[ages.length - 1] - ages[0]}`);

console.log(`Min-Max Compare: ${(Math.abs(ages[0] - averageAge))}, ${(Math.abs(ages[ages.length - 1] - averageAge))}`);