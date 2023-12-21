'use strict';

// function declaration
// function yearsTillRetirement (birthYeah) {
//     const age = 2023 - birthYeah;
//     return age;
// }

// const myAge = yearsTillRetirement (1987);
// console.log (myAge);

// function expression
// const yearsTillRetirement = function (birthYeah) {
//     const age = 2023 - birthYeah;
//     return age;
// }

// const myAge = yearsTillRetirement (1987);
// console.log (myAge);

// Function arrow
// const myAge = birthYear => console.log (2023 - birthYear);
// myAge (1987);

//Function in function
// const catYears = (inCatAge) => inCatAge * 7;

// function yearsTillRetirement (birthYeah) {
//     const age = 2023 - birthYeah;
//     const catAge = catYears (age);
//     const mySentance = `My age is ${age}, but in cat years it is ${catAge}`
//     return mySentance;
// }

// console.log ( yearsTillRetirement (1987));

/*
//Challenge 5

const calcAverage = (Score1, Score2, Score3) => (Score1 + Score2 + Score3) / 3;
const avgDolphinsMain = calcAverage (85,54,71);
const avgKoalasMain = calcAverage (23,34,27);
console.log(avgDolphinsMain,avgKoalasMain);

//console.log (avgDolphins, avgKoalas);
function checkWinner (avgDolhins, avgKoalas) {

    if (avgDolhins >= 2 * avgKoalas) {
   return `Dolphins win (${avgDolhins} vs. ${avgKoalas})`; 
} else if (avgKoalas >= 2 * avgDolhins) {
    return `Koalas win (${avgKoalas} vs. ${avgDolhins})`;
} else {return console.log("No Winner")};
}
console.log(checkWinner (avgDolphinsMain,avgKoalasMain)); 
*/

//Challenge 6

const calcTip = function (bill) {
return bill >= 50 && bill <=300 ? bill * 0.15 : bill * 0.2;
};
console.log (calcTip(100));

const bills = [125,555,44];
console.log (bills);
const tips = [calcTip(bills[0]),calcTip(bills[1]),calcTip(bills[2])];
console.log(tips);
const total = [(bills[0] + tips[0]), (bills[1] + tips[1]), (bills[2] + tips[2])];
console.log(total);

// bill.push(11);
// console.log (bill);
// console.log (bill.length-1);
// bill[1] = 100;
// console.log (bill);



