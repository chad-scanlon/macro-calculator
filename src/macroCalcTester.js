//
//
//
//
//
// long and dumb >>>>>>>>>>
const reducer = (accumulator, currentValue) => accumulator + currentValue;
let carbFactor = 0;
let fatFactor = 0;
let proteinFactor = 0;
let macroCarbFactor = 0;
let macroFatFactor = 0;
let macroProteinFactor = 0;

const thatNewNewNew = (list, object) => {
    let magicNums = { magicCarb: 0, magicFat: 0, magicProtein: 0 };
    list.forEach((food) => {
        macroCarbFactor = object.c / list.length;
        carbFactor = 1 / food.carbs;
        food.magicCarb = macroCarbFactor * carbFactor;
        macroFatFactor = object.f / list.length;
        fatFactor = 1 / food.fat;
        food.magicFat = macroFatFactor * fatFactor;
        macroProteinFactor = object.p / list.length;
        proteinFactor = 1 / food.protein;
        food.magicProtein = macroProteinFactor * proteinFactor;
        if (food.rank.first === "carb") {
            food.servings = food.magicCarb;
        }
        if (food.rank.first === "fat") {
            food.servings = food.magicFat;
        }
        if (food.rank.first === "protein") {
            food.servings = food.magicProtein;
        }
    });
};
const testObject = { c: 250, cals: 2500, f: 50, p: 150 };
const testList = [
    {
        cals: 86,
        carbs: 20.12,
        fat: 0.05,
        name: "Sweet Potato",
        protein: 1.57,
        servings: 0,
    },
    {
        cals: 77,
        carbs: 17.47,
        fat: 0.09,
        name: "Potato",
        servings: 0,
    },
    {
        cals: 118,
        carbs: 27.88,
        fat: 0.17,
        name: "Yam",
        servings: 0,
    },
];
thatNewNewNew(testList, testObject);
console.log(testList);

let carbSum = 0;
let fatSum = 0;
let proteinSum = 0;
let quarterServing = parseFloat(0.25);
const thatNewNew = (list, object) => {
    while (carbSum < object.c && fatSum < object.f && proteinSum < object.p) {
        list.forEach((element) => {
            carbSum += element.carbs * quarterServing;
            console.log(carbSum);
            fatSum += element.fat * quarterServing;
            console.log(fatSum);
            proteinSum += element.protein * quarterServing;
            console.log(proteinSum);
            element.servings += quarterServing;
        });
    }
};
// thatNewNew(testList, testObject);
// console.log(testList);

// garbage >>>>>>>>>>>>>

// let testMacroTotal = 0;
// let testMacroTotalSum = 0;
// const newTester = (obj, arr) => {
//     if (testMacroTotalSum < obj.c) {
//         for (let i = 0; i < arr.length; i++) {
//             testMacroTotal = arr[i].servings * arr[i].carbs;
//             arr[i].servings += 0.25;

//             console.log(updatedObj);
//             testMacroTotalSum += testMacroTotal;
//         }
//     }
//     if (testMacroTotalSum < obj.c) {
//         newTester(obj, arr);
//     }
//     // console.log(testMacroTotalSum);
//     return arr;
// };

// const testObj = { c: 250, cals: 2500, f: 50, p: 150 };
// const testArray = [
//     {
//         cals: 86,
//         carbs: 20.12,
//         fat: 0.05,
//         name: "Sweet Potato",
//         protein: 1.57,
//         servings: 0,
//     },
//     {
//         cals: 77,
//         carbs: 17.47,
//         fat: 0.09,
//         name: "Potato",
//         servings: 0,
//     },
//     {
//         cals: 118,
//         carbs: 27.88,
//         fat: 0.17,
//         name: "Yam",
//         servings: 0,
//     },
// ];
// newTester(testObj, testArray);
// console.log(testArray);
// const targets = { c: 250, cals: 2500, f: 50, p: 150 };
// const foodOptions = [
//     {
//         cals: 86,
//         carbs: 20.12,
//         fat: 0.05,
//         name: "Sweet Potato",
//         protein: 1.57,
//         servings: 0,
//     },
//     {
//         cals: 77,
//         carbs: 17.47,
//         fat: 0.09,
//         name: "Potato",
//         servings: 0,
//     },
// ];
// const maxNum = targets.c;
// const recursiveFunc = (num) => {
//     console.log(num);
//     const newNumber = num + 0.25;
//     if (newNumber < maxNum) {
//         recursiveFunc(newNumber);
//     }
//     console.log(newNumber);
//     return newNumber;
// };
// const recursiveHelper = (num) => {
//     const newNumber = num + 0.25;

//     recursiveFunc(newNumber);

//     return newNumber;
// };

// below, the function takes top-down approach, starting by taking the rough calorie share for 1 macro. In this case carbs. If we're dealing with 450 total grams of macros, and carbs is capped at 250, then that's 55% of the total calories coming from carbs, meaning we multiply that 55% by the total calorie limit for the day and get a rough total cap for calories from that macro (1388 in this case. Then we subtract servibgs for each food until the macro total is less than the target)
// export const testFunction = (foodList, targetObj) => {
//     let tempNumOfServings = 0;
//     let foodName = "";
//     let calsFactor = 0;
//     let tempMacroTotal = 0;
//     let specMacroTotal = 0;
//     let bigmacroFactor = 0;
//     let tempTotal = 0;
//     let sum = 0;
//     let overage = 0;
//     if (targetObj) {
//         sum =
//             parseInt(targetObj.c) +
//             parseInt(targetObj.f) +
//             parseInt(targetObj.p);

//         bigmacroFactor = targetObj.c / sum;

//         // will give us the number of cals per macro we should use
//         //  as the starting point for the magic function >>>>
//         calsFactor = targetObj.cals * bigmacroFactor;
//         console.log(calsFactor);
//         if (foodList) {
//             if (foodList.length === 1) {
//                 // we only have one food to worry about
//                 foodList.forEach((food) => {
//                     tempNumOfServings = calsFactor / food.cals;
//                     // console.log(
//                     //     "num of servings of",
//                     //     food.name,
//                     //     tempNumOfServings
//                     // );
//                     tempMacroTotal += food.carbs * tempNumOfServings;
//                     console.log("tempMacroTotal", tempMacroTotal);
//                     if (tempMacroTotal <= targetObj.c) {
//                         // console.log(isSafe);
//                     } else {
//                         let isSafe = false;
//                         // console.log(isSafe);
//                         while (tempNumOfServings * food.carbs > targetObj.c) {
//                             tempNumOfServings -= 0.25;
//                             food.servings = tempNumOfServings.toFixed(2);
//                             // console.log(isSafe);
//                             // console.log(tempNumOfServings);
//                         }
//                     }
//                 });
//             } else {
//                 // we have more than one food
//                 console.log("entering 2nd loop");
//                 foodList.forEach((food) => {
//                     tempNumOfServings =
//                         calsFactor / food.cals / foodList.length;
//                     console.log(tempNumOfServings, food.name);
//                     tempTotal += tempNumOfServings * food.carbs;
//                     console.log(tempTotal);
//                     if (tempTotal > targetObj.c) {
//                         console.log("too fat");
//                         while (
//                             tempNumOfServings > 0 &&
//                             tempTotal > targetObj.c
//                         ) {
//                             console.log("too fat");
//                             foodList.forEach((food) => {
//                                 tempNumOfServings -= 1;
//                                 console.log(tempNumOfServings, food.name);
//                             });
//                         }
//                         console.log(tempNumOfServings, food.name);
//                     }
//                 });
//             }
//         }
//     }

//     // multiply the macro percentages by the selections
//     // return the name and the portions using the while loop
//     // logic in the magic function
// };
// const testFunction = (foodList, targetObj) => {
//     let singleFoodNumOfServings = 0;
//     let multFoodNumOfServings = 0;
//     let foodName = "";
//     let calsFactor = 0;
//     let tempMacroTotal = 0;
//     let specMacroTotal = 0;
//     let bigmacroFactor = 0;
//     let tempTotal = 0;
//     let sum = 0;
//     let overage = 0;
//     if (targetObj) {
//         sum =
//             parseInt(targetObj.c) +
//             parseInt(targetObj.f) +
//             parseInt(targetObj.p);

//         bigmacroFactor = targetObj.c / sum;
//         calsFactor = targetObj.cals * bigmacroFactor;
//         console.log(calsFactor);
//         if (foodList) {
//             if (foodList.length === 1) {
//                 foodList.forEach((food) => {
//                     singleFoodNumOfServings = calsFactor / food.cals;
//                     tempMacroTotal += food.carbs * singleFoodNumOfServings;
//                     console.log("tempMacroTotal", tempMacroTotal);
//                     if (tempMacroTotal <= targetObj.c) {
//                     } else {
//                         let isSafe = false;
//                         while (
//                             singleFoodNumOfServings * food.carbs >
//                             targetObj.c
//                         ) {
//                             singleFoodNumOfServings -= 0.25;
//                             food.servings = singleFoodNumOfServings.toFixed(2);
//                         }
//                     }
//                 });
//             } else {
//                 // we have more than one food
//                 console.log("entering 2nd loop");
//                 foodList.forEach((food) => {
//                     console.log(food);
//                     food.servings = 0.25;
//                     specMacroTotal += food.servings * food.carbs;
//                     // while (specMacroTotal < 250) {
//                     //     food.servings + 0.25;
//                     // }
//                     recursiveFunc(food.servings);
//                     console.log(food);
//                 });

//                 console.log(specMacroTotal);
//             }
//         }
//     }
// };
// testFunction(foodOptions, targets);
// number = 0;
// recursiveFunc(number);

// let testMacroTotal = 0;
// let newTestMacroTotal = 0;
// const recursiveTester = (obj, arr) => {
//     arr.forEach((element) => {
//         testMacroTotal = element.servings * element.carbs;
//         const newElemServings = element.servings + 0.25;
//         newTestMacroTotal += newElemServings * element.carbs;

//         if (newTestMacroTotal < obj.c) {
//             element.servings = newElemServings;
//             //     console.log(newTestMacroTotal);
//             recursiveTester(obj, arr);
//         }
//     });
// };
//
//
// adding an extra for loop and using a helper func
// as the recursive func
