const score  = prompt('Enter Score');

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