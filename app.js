let raceNumber = (Math.random()*1001); // 1 step

let registeredEarly = true; // 2 step
 
let runnerAge = 19; // 3 step

//(runnerAge = 18 && registeredEarly) ? console.log(raceNumer = 1000) : console.log("It's false!");

if (runnerAge = 18 && registeredEarly) { // 4 step
    console.log(raceNumber + 1000);
}
else {
    console.log("It's false!");
}

if (runnerAge >= 18 && registeredEarly) { // 5 step
    console.log(`You will race at 9:30 am, your race number is ${raceNumber}`);
}
else if (runnerAge > 18 && registeredEarly === false) { //6 step
    console.log(`You will race at 11:00 am, your race number is ${raceNumber}`);
}
else if (runnerAge < 18) { // 7 step
    console.log(`You will race at 12:30 pm, your race number is ${raceNumber}`);
}
else {
    console.log('Please wait!');
}
