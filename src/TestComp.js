import "./App.css";
import { useState, useEffect } from "react";

const TestComp = () => {
    const [macroGoal, setMacroGoal] = useState({ c: 250, f: 50, p: 150 });
    const [calories, setCalories] = useState(2500);
    const [ounces, setOunces] = useState({ chicken: 0, rice: 0, broccoli: 0 });
    const [macros, setMacros] = useState({ cals: 0, c: 0, p: 0, f: 0, oz: 0 });
    const [selected, setSelected] = useState(false);
    const [formState, setFormState] = useState({
        protein: "",
        carbs: "",
        fats: "",
    });
    // foodstate will be grams/per/oz nums
    const [foodState, setFoodState] = useState([
        {
            name: "brocc",
            carbs: 2,
            fat: 0.1,
            protein: 2.17,
        },
        { name: "chix", carbs: 0, fat: 0.9, protein: 7.5 },
        { name: "riz", carbs: 6.7, fat: 0.2, protein: 0.7 },
    ]);

    const addChicken = () => {
        setMacros({
            cals: macros.cals + 40,
            c: macros.c + 0,
            p: macros.p + 7.5,
            f: macros.f + 0.9,
        });
        setOunces({
            chicken: ounces.chicken + 1,
            rice: ounces.rice + 0,
            broccoli: ounces.broccoli + 0,
        });
    };
    const addRice = () => {
        setOunces({
            chicken: ounces.chicken + 0,
            rice: ounces.rice + 1,
            broccoli: ounces.broccoli + 0,
        });
        setMacros({
            cals: macros.cals + 32,
            c: macros.c + 6.7,
            p: macros.p + 0.7,
            f: macros.f + 0.2,
        });
    };
    const addBroccoli = () => {
        setOunces({
            chicken: ounces.chicken + 0,
            rice: ounces.rice + 0,
            broccoli: ounces.broccoli + 1,
        });
        setMacros({
            cals: macros.cals + 10,
            c: macros.c + 2.7,
            p: macros.p + 0.7,
            f: macros.f + 0.1,
        });
    };
    const handleChange = (event) => {
        event.persist();
        const newFormData = {
            ...formState,
            [event.target.name]: event.target.value,
        };
        setFormState(newFormData);
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        setSelected(true);
        setFormState(formState);
        console.log(formState);
        reconcileProtein();
    };
    const reconcileProtein = () => {
        setOunces({ chicken: calories / 40 });
        setMacros({
            p: macros.p + 1 * 7.5,
            c: macros.c,
            f: macros.f + 1 * 0.9,
        });
    };
    const reconcileCarbs = () => {
        setOunces({ rice: calories / 32 });
        setMacros({
            p: macros.p + 1 * 0.7,
            c: macros.c + 1 * 6.7,
            f: macros.f + 1 * 0.2,
        });
    };
    const runCalculation = () => {
        console.log("calc");
    };
    function theCarbCalculation(arr) {
        let carbs = [];
        arr.forEach((food) => {
            food.carbs > 0
                ? carbs.push(food.carbs)
                : // console.log(food.name, "has carbs")
                  console.log(food.name, "has no carbs");
        });
        // console.log(carbs);

        let max = Math.max(...carbs);
        let min = Math.min(...carbs);
        let ratio = max / min;
        // console.log(ratio);
        let carbDiff = macroGoal.c / ratio;
        // console.log(macroGoal.c / ratio);

        let bigCarbReq = macroGoal.c - carbDiff;

        // console.log(carbDiff);
        return carbDiff;
    }

    let bigCarb =
        macroGoal.c - theCarbCalculation(foodState) / foodState[2].carbs;
    let smallCarb = theCarbCalculation(foodState) / foodState[0].carbs;
    // console.log(bigCarb, smallCarb);

    let bigCarbReq = macroGoal.c - theCarbCalculation(foodState);
    let bigCarbOzReq = bigCarbReq / foodState[2].carbs;
    console.log(bigCarbOzReq);
    let smallCarbOzReq = theCarbCalculation(foodState) / foodState[0].carbs;
    // console.log(smallCarbOzReq);
    //
    //
    //
    //

    return (
        <>
            <div className="limits-container">
                <div>
                    Total calories accrued: {macros.cals}
                    <br />
                    Calories left: {calories - macros.cals}
                </div>
                <br />

                <div>
                    Total Cals:{macros.cals}
                    <br />
                    Total Carbs:{macros.c.toFixed(2)}g
                    <br />
                    Total Protein:{macros.p.toFixed(2)}g
                    <br />
                    Total Fats:{macros.f.toFixed(2)}g
                </div>
                <br />
                <div>Total oz chicken: {ounces.chicken}</div>
                <div>Total oz rice: {ounces.rice}</div>
                <div>Total oz broccoli: {ounces.broccoli}</div>
            </div>
            {/*  */}
            {/*  */}
            <br />
            {/*  */}
            {/*  */}
            <br />
            <div className="ratios">
                <span>Rice grams: {bigCarb.toFixed(2)}</span>
                <br />
                <span>Rice ounces: {bigCarbOzReq.toFixed(2)}</span>
                <br />
                <br />
                <span>Broccoli grams: {smallCarb.toFixed(2)}</span>
                <br />
                <span>Broccoli ounces:{smallCarbOzReq.toFixed(2)}</span>
            </div>
            <div className="set-foods">
                <button onClick={() => addChicken()}>Add Chicken Oz</button>
                <button onClick={() => addRice()}>Add Rice Oz</button>
                <button onClick={() => addBroccoli()}>Add Broccoli Oz</button>
            </div>
        </>
    );
};
export default TestComp;
