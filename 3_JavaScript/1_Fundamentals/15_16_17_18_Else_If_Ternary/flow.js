const score  = Number(prompt('Enter Score'));

if(score >= 90 && score <= 100) {
    alert("Congrats You get a Perfect A");
} else if(score >= 70 && score < 90) {
    alert("Keep Trying You get a B");
} else if(score >= 60 && score < 70) {
    alert("Put More Effot You get a C");
} else if(score >= 50 && score < 60) {
    alert("Work Harder You got a D");
} else if (score >= 0 && score < 50) {
    alert("You have extra classes You got a F");
} else {
    alert("Invalid Score");
}

const month = Number(prompt("Enter Month in Numbers between 1 to 12:"));

((month === 12) || (month >= 1 && month <= 2)) ? alert("It is Winter Season.") : (month >= 9 && month <= 11) ? alert("It is Autumn Season.") : (month >= 6 && month <= 8) ? alert("It is Summer Season.") : (month >= 3 && month <= 5) ? alert("It is Spring Season.") : alert("Invalid Month");

const month1 = Number(prompt("Enter Month in Numbers between 1 to 12:"));
const year = Number(prompt("Enter Year in Numbers:"));

const checkLeapYear = (year) => {
    if(((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0)) {
        return true;
    } else {
        return false;
    }
}

if(month1 === 2) {
    if(checkLeapYear(year)) {
        alert("Number of Days in Month is 29");
    } else {
        alert("Number of Days in Month is 28") ;
    }
} else if(month1 % 2 === 0) {
    alert("Number of Days in Month is 30");
} else if(month1 % 2 !== 0) {
    alert("Number of Days in Month is 31");
} else {
    alert("Invalid Month");
}

