/* let js = 'amazing';
console.log (2 + 2); 
let g ="John";
console.log (g);
true;
console.log (true);
let age = 3;
const myName = "Vika";
console.log (age ** 2);
const lastName = "Bryzhaak";
console.log (myName + ' ' + lastName);
age += 2;
age *=2;
age *= 2;
age ++;
age --;
console.log (age);
const iSFullAge = age < 20;
*/

/*
//Challenge 1,2
const markMass1 = 79;
const markHeight1 = 1.69;
const johnMass1 = 92;
const johnHeight1 = 1.95;
console.log (markMass1, markHeight1, johnMass1, johnHeight1);


const markMass2 = 95;
const markHeight2 = 1.88;
const johnMass2 = 85;
const johnHeight2 = 1.76;
console.log (markMass2, markHeight2, johnMass2, johnHeight2);

const bmiMark1 = markMass1 / markHeight1 ** 2;
const bmiJohn1 = johnMass1 / johnHeight1 ** 2;

const bmiMark2 = markMass2 / (markHeight2 * markHeight2);
const bmiJohn2 = johnMass2 / (johnHeight2 * johnHeight2);

const markHigherBMI1 = bmiMark1 > bmiJohn1;

const markHigherBMI2 = bmiMark2 > bmiJohn2;

console.log (bmiMark1, bmiJohn1, markHigherBMI1);
console.log (bmiMark2, bmiJohn2, markHigherBMI2);

if (bmiMark1 > bmiJohn1) {
    console.log (`Mark's BMI (${bmiMark1}) is  higher than John's (${bmiJohn1})`)
} else {
    console.log (`Jonh's BMI (${bmiJohn1}) is  higher than Mark's (${bmiMark1})`)
};

if (bmiMark2 > bmiJohn2) {
    console.log (`Mark's BMI (${bmiMark2}) is  higher than John's (${bmiJohn2})`)
} else {
    console.log (`Jonh's BMI (${bmiJohn2}) is  higher than Mark's (${bmiMark2})`)
};
*/


/*
const myName = "Vika";
const birthYear = 1987;
const currentYear = 2023;
const job = "QA";

console.log (`I'm ${myName}, a ${currentYear - birthYear} years old ${job}`);

console.log (`First row
Second row  `);

console.log ("2" + "3" +22);

console.log (birthYear && currentYear);
*/

/*
//Challenge 3
const averageDolphins = (96 + 108 + 89)/3;
//const averageKoalas = (120 + 108 + 89)/3;
const averageKoalas = (88 + 91 + 110)/3;

if (averageDolphins > averageKoalas) {
    console.log (`Dolphins is the winner 🏆 with the average score (${averageDolphins})`)
} else if (averageDolphins === averageKoalas) {
    console.log (`Dolphins and Koalas finished with draw result (${averageDolphins})`)
} else {
    console.log (`Koalas is the winner with the average score (${averageKoalas})`)
};
*/



/*
//Challenge 3 Bonus2
const dolphinsWin1 = 97;
const dolphinsWin2 = 112;
const dolphinsWin3 = 101;
const averageDolphins = (dolphinsWin1 + dolphinsWin2 + dolphinsWin3) / 3;
//const averageKoalas = 103.33333333333333;

const koalasWins = [109, 95, 123];
var sumKoalasWins = 0; // variable that is needed for averageKoalas calculation
koalasWins.forEach(function(num) { sumKoalasWins += num }); // FoEach function is needed to loop through the numbers in the array and add each number to the sumKoalasWins to get a sum of all numbers in the array (sumKoalasWins)
const averageKoalas = sumKoalasWins / koalasWins.length; // where koalasWins.length is a quantity of numbers in the array


const minScore = 100;

let minDolphins;
if (dolphinsWin1 < dolphinsWin2 < dolphinsWin3) {
minDolphins = dolphinsWin1
} else if (dolphinsWin2 < dolphinsWin1 < dolphinsWin3) {
    minDolphins = dolphinsWin2
} else {
    minDolphins = dolphinsWin3
};

const minKoalas = Math.min (109, 95, 123);

console.log (`averageDolphins (${averageDolphins}), minDolphins (${minDolphins}), averageKoalas (${averageKoalas}), minKoalas (${minKoalas})`);


if ((averageDolphins > averageKoalas) && minDolphins >= minScore) {
    console.log (`Dolphins is the winner with the average score (${averageDolphins}) and min Score (${minDolphins})`)
} else if ((averageDolphins < averageKoalas) && minKoalas >= minScore) {
    console.log (`Koalas is the winner with the average score (${averageKoalas}) and min Score (${minKoalas}`)
} else if (averageDolphins === averageKoalas) {
    console.log (`Dolphins and Koalas finished with draw result (${averageDolphins})`)
} else {
    console.log ("There's no winner")
};
*/




//Challenge 3 Bonus2
const averageDolphins = (97 + 112 + 101)/3;
//const averageKoalas = (97 + 112 + 101)/3;
const averageKoalas = (109 + 95 + 108)/3;
const minScore = 100;
const minDolphins = Math.min (97, 112, 101);
const minKoalas = Math.min (109, 95, 106);
console.log (`averageDolphins (${averageDolphins}), minDolphins (${minDolphins}), averageKoalas (${averageKoalas}), minKoalas (${minKoalas})`);
//console.log (typeof minDolphins, typeof minScore);

if ((averageDolphins > averageKoalas) && minDolphins >= minScore) {
    console.log (`Dolphins is the winner with the average score (${averageDolphins}) and min Score (${minDolphins})`)
} else if ((averageDolphins < averageKoalas) && minKoalas >= minScore) {
    console.log (`Koalas is the winner with the average score (${averageKoalas}) and min Score (${minKoalas}`)
} else if (averageDolphins === averageKoalas && minDolphins >= minScore && minKoalas >= minScore ) {
    console.log (`Dolphins and Koalas finished with draw result (${averageDolphins})`)
} else {
    console.log ("There's no winner")
};
