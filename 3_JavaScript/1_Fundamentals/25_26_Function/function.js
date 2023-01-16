function generateBMI(weight, height) {
    const bmi = weight / (height * height);
    const remark = (bmi < 18.5) ? 'Underweight' : (bmi >= 18.5 && bmi <= 24.9) ? 'Normal Weight' : (bmi >= 25 && bmi <= 29.9) ? 'Overweight' : (bmi >= 30) ? 'Obese' : 'Invalid BMI';

    return {
        weight: `${weight} K.G.`,
        height: `${height} Meters`,
        BMI: `${bmi} K.G./m^2`,
        Remark: remark
    };
}

const weight = parseFloat(prompt('Enter You Weight in Kilograms:'));
const height = parseFloat(prompt('Enter Height in Meters:'));
const health = generateBMI(weight, height);

alert(`Weight: ${weight}, Height: ${height}, BMI: ${health.BMI}, Remark: ${health.Remark}`);
console.log(health);

const num = parseInt(prompt('Enter a Number'));

const printTable = (num) => {
    const table = [];

    for(let i = 1; i <= 10; i++) {
        table.push(`${num} * ${i} = ${num * i}`);
    }

    return table;
}

console.log(printTable(num));