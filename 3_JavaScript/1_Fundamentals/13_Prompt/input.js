const age = prompt("What is your age ?");

if (age >= 18) {
    alert("You are Old Enough To Drive");
} else {
    alert(`Wait For ${18-age} years`);
}