const fileName = prompt('Enter File Name:');
const subStrings = fileName.split('.');

console.log('File Name', subStrings[0]);
console.log('File Extension', subStrings[subStrings.length - 1]);