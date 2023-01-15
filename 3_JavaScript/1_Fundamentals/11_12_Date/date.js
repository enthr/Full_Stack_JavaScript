const today = new Date();
const year = today.getUTCFullYear();
const month = today.getUTCMonth()+1;
const date = today.getUTCDate();
let day = today.getUTCDay()+1;
switch(day) {
    case 1:
        day = "Sunday";
        break;
    case 2:
        day = "Monday";
        break;
    case 3:
        day = "Tuesday";
        break;
    case 4:
        day = "Wednsday";
        break;
    case 5:
        day = "Thursday";
        break;
    case 6:
        day = "Friday";
        break;
    case 7:
        day = "Saturday";
        break;
    default:
        console.log("Invalid Day");
        break;
}

const hours = today.getUTCHours();
const minutes = today.getUTCMinutes();

console.log(year, month, date, day, hours, minutes);
console.log("Seconds Elapsed from January 1, 1970 to Now", today.getTime());

console.log(`${year}-${month}-${date} ${hours}:${minutes}`);
console.log(`${date}-${month}-${year} ${hours}:${minutes}`);
console.log(`${date}/${month}/${date} ${hours}:${minutes}`);