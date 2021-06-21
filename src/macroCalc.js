let isSafe = true;
const targets = { c: 250, cals: 2500, f: 50, p: 150 };
const foodOptions = [
    {
        cals: 417,
        carbs: 1.28,
        fat: 39.69,
        name: "Bacon",
        protein: 12.62,
        servings: 0,
    },
    {
        cals: 360,
        carbs: 79.34,
        fat: 0.58,
        name: "Rice",
        protein: 6.61,
        servings: 0,
    },
    {
        cals: 167,
        carbs: 0,
        fat: 6.63,
        name: "Cooked Chicken",
        protein: 25.01,
        servings: 0,
    },
    {
        cals: 86,
        carbs: 20.12,
        fat: 0.05,
        name: "Sweet Potato",
        protein: 1.57,
        servings: 0,
    },
    {
        cals: 34,
        carbs: 6.64,
        fat: 0.37,
        name: "Broccoli",
        protein: 2.82,
        servings: 0,
    },
];
// helpers >>>>>>>>
const reducer = (accumulator, currentValue) => accumulator + currentValue;
const enumerator = (obj) => {
    for (let [key, val] of Object.entries(obj)) {
        return key, val;
    }
};
// at first the portioning functioning was going to start with
// calories as the primary pivot point. Divide the total target
// cals by however many food items, then multiply the num of
// servings by that food's share, then adust the servings of
// each food in order to get the macros under targets. The
// problem with that method is as we add more food items it will
// get complicated and output too many possible combinations of
// food items and their servings, but also we could end up with
// unrealistic output like 80 servings of broccoli and 1 serving
// of chicken.
// Instead we want the portioning function to have a helper
// function that uses the food item's primary macro quality
// or qualities, i.e. bacon has a higher concentration of fat
// than carbs; chicken has a higher concentration of protein
// than fat.
// So, we loop over food list to determine which property carries
// the most weight,
// the better solution will utilize a "calories from carbs, fat,
// protein," data set to really give accurate macro concentration
// original weightCreator function >>>>

export const weightCreator = (foodObj, targetObj) => {
    let macroWeight = {
        carbsWeight: 0,
        fatWeight: 0,
        proteinWeight: 0,
    };

    let overallWeight = {
        primary: "",
        secondary: "",
        tertiary: "",
    };
    let rank = { first: "", second: "", third: "" };

    if (foodObj) {
        let tempArr = [];

        foodObj.overallWeight = overallWeight;
        foodObj.macroWeight = macroWeight;
        foodObj.rank = rank;
        foodObj.macroWeight.carbsWeight = (targetObj.c / foodObj.carbs).toFixed(
            2
        );
        foodObj.macroWeight.fatWeight = (targetObj.f / foodObj.fat).toFixed(2);
        foodObj.macroWeight.proteinWeight = (
            targetObj.p / foodObj.protein
        ).toFixed(2);
        tempArr.push(
            foodObj.macroWeight.carbsWeight,
            foodObj.macroWeight.fatWeight,
            foodObj.macroWeight.proteinWeight
        );
        tempArr.sort(function (a, b) {
            return a - b;
        });
        // console.log(tempArr);
        foodObj.overallWeight.primary = tempArr[0];
        foodObj.overallWeight.secondary = tempArr[1];
        foodObj.overallWeight.tertiary = tempArr[2];
        for (let [key, value] of Object.entries(foodObj.overallWeight)) {
            // console.log(key, value);
            for (let [k, v] of Object.entries(foodObj.macroWeight)) {
                // console.log(foodObj.macroWeight.v);
                if (key === "primary") {
                    if (overallWeight.primary === macroWeight.carbsWeight) {
                        foodObj.rank.first = "carb";
                    }
                    if (overallWeight.secondary === macroWeight.carbsWeight) {
                        foodObj.rank.second = "carb";
                    }
                    if (overallWeight.tertiary === macroWeight.carbsWeight) {
                        foodObj.rank.third = "carb";
                    }
                    if (overallWeight.primary === macroWeight.fatWeight) {
                        foodObj.rank.first = "fat";
                    }
                    if (overallWeight.secondary === macroWeight.fatWeight) {
                        foodObj.rank.second = "fat";
                    }
                    if (overallWeight.tertiary === macroWeight.fatWeight) {
                        foodObj.rank.third = "fat";
                    }
                    if (overallWeight.primary === macroWeight.proteinWeight) {
                        foodObj.rank.first = "protein";
                    }
                    if (overallWeight.secondary === macroWeight.proteinWeight) {
                        foodObj.rank.second = "protein";
                    }
                    if (overallWeight.tertiary === macroWeight.proteinWeight) {
                        foodObj.rank.third = "protein";
                    }
                }
            }
        }
    }
};

// weightCreator(foodOptions, targets);
//
let carbFactor = 0;
let fatFactor = 0;
let proteinFactor = 0;
let macroCarbFactor = 0;
let macroFatFactor = 0;
let macroProteinFactor = 0;

export const thatNewNewNew = (list, object) => {
    let magicNums = { magicCarb: 0, magicFat: 0, magicProtein: 0 };
    list.forEach((food) => {
        // carbs
        macroCarbFactor = object.c / list.length;
        carbFactor = 1 / food.carbs;
        food.magicCarb = macroCarbFactor * carbFactor;
        //
        // fat
        macroFatFactor = object.f / list.length;
        fatFactor = 1 / food.fat;
        food.magicFat = macroFatFactor * fatFactor;
        //
        // protein
        macroProteinFactor = object.p / list.length;
        proteinFactor = 1 / food.protein;
        food.magicProtein = macroProteinFactor * proteinFactor;
        //
        if (food.rank.first === "carb") {
            food.servings = food.magicCarb.toFixed(2);
        }
        if (food.rank.first === "fat") {
            food.servings = food.magicFat.toFixed(2);
        }
        if (food.rank.first === "protein") {
            food.servings = food.magicProtein.toFixed(2);
        }
    });
};
//
//

//
//
//
//

//
//
//
//
// now we will try a bottom up approach, but we will use the same logic for our 1-food-base-case, and try the bottom up approach in the multiple-foods-case
// const recursiveFunc = (num) => {
//     return num + 0.25;
// };
// export const testFunction = (foodList, targetObj) => {
//     let singleFoodNumOfServings = 0;
//     let calsFactor = 0;
//     let tempMacroTotal = 0;
//     let bigmacroFactor = 0;
//     let sum = 0;
//     let carbSum = 0;
//     let servingsOfEach = 0;
//     let remainder = 0;
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
//                 // we only have one food item in the list
//                 foodList.forEach((food) => {
//                     singleFoodNumOfServings = calsFactor / food.cals;
//                     tempMacroTotal += food.carbs * singleFoodNumOfServings;

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
//                 let macVals = [];
//                 let maxMac = 0;
//                 let numOfItems = foodList.length;
//                 foodList.forEach((element) => {
//                     if (element.carbs) {
//                         macVals.push(element.carbs);
//                     }
//                     carbSum += element.carbs / 4;
//                     console.log(carbSum);
//                 });
//                 maxMac = Math.max(...macVals);
//                 servingsOfEach = targetObj.c / maxMac;
//                 foodList.forEach((element) => {
//                     element.servings = (servingsOfEach / numOfItems).toFixed(2);
//                     carbSum += element.servings * element.carbs;
//                     console.log(carbSum);
//                 });
//             }
//         }
//     }
// };

// let carbSum = 0;
// let quarterServing = parseFloat(0.25);
// export const thatNewNew = (list, object) => {
//     while (carbSum < object.c) {
//         list.forEach((element) => {
//             carbSum += element.carbs * quarterServing;

//             element.servings += quarterServing;
//         });
//     }
// };
