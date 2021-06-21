import { useContext, useState } from "react";
import { MacroContext } from "../contexts/MacroContext";
import MacroPortions from "./MacroPortions";
const MacroOutput = ({ targets, macros }) => {
    // console.log(macros);
    // console.log(targets);

    const { calculatePortions } = useContext(MacroContext);
    const selectionList = macros[macros.length - 1];

    let calsTotal = 0;
    let carbsTotal = 0;
    let fatTotal = 0;
    let proteinTotal = 0;
    let calsDiff = 0;
    let carbsDiff = 0;
    let fatDiff = 0;
    let proteinDiff = 0;

    if (selectionList) {
        selectionList.forEach((obj) => {
            if (obj.cals) {
                calsTotal += obj.cals * obj.servings;
                calsDiff = (targets.cals - calsTotal).toFixed(2);
            }

            if (obj.carbs) {
                carbsTotal += obj.carbs * obj.servings;
                carbsDiff = (targets.c - carbsTotal).toFixed(2);
            }
            if (obj.fat) {
                fatTotal += obj.fat * obj.servings;
                fatDiff = (targets.f - fatTotal).toFixed(2);
            }
            if (obj.protein) {
                proteinTotal += obj.protein * obj.servings;
                proteinDiff = (targets.p - proteinTotal).toFixed(2);
            }
        });
    }
    const [negativeStyle, setNegativeStyle] = useState(false);
    return (
        <>
            <div className="output-container">
                <h2>Totals</h2>
                <div className="output-target-box">
                    <div className="total-selected">
                        <h4 className="selected-header">Selected</h4>
                        <p>Calories:{calsTotal.toFixed(2)}</p>
                        <p>Carbs:{carbsTotal.toFixed(2)}</p>
                        <p>Fat:{fatTotal.toFixed(2)}</p>
                        <p>Protein:{proteinTotal.toFixed(2)}</p>
                    </div>
                    <div className="target-diff">
                        <h4 className="diff-header">Remaining</h4>
                        <p>
                            Calories:
                            {calsDiff}
                        </p>
                        <p>
                            Carbs:
                            {carbsDiff}
                        </p>
                        <p>
                            Fat:
                            {fatDiff}
                        </p>
                        <p>
                            Protein:
                            {proteinDiff}
                        </p>
                    </div>
                    <div className="portions">
                        <MacroPortions
                            targets={targets}
                            selectionList={selectionList}
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default MacroOutput;
