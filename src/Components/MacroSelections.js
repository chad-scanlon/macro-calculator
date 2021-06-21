import { useState, useContext } from "react";
import { MacroContext } from "../contexts/MacroContext.js";

const MacroSelections = ({
    selectionList,
    name,
    cals,
    carbs,
    fat,
    protein,
    servings,
}) => {
    // console.log(selectionList, name, cals, carbs, fat, protein);
    const { addToMacros } = useContext(MacroContext);

    const [isEditing, setIsEditing] = useState(false);

    const handleServings = () => {
        selectionList.forEach((obj) => {
            for (let property in obj) {
                if (obj.name === name && property === "servings")
                    obj.servings = obj.servings + 1;
            }
            // console.log(obj);
        });
    };
    const handleFinish = () => {
        addToMacros(selectionList);
        // console.log(addToMacros);
        // console.log(selectionList);
        setIsEditing(false);
    };

    return (
        <>
            <div className="ind-selection">
                <p>
                    {servings} servings of {name}
                </p>
                <button onClick={() => setIsEditing(true)}>
                    Edit servings
                </button>

                {isEditing ? (
                    <>
                        <button
                            className="button"
                            onClick={() => handleServings()}
                        >
                            Add
                        </button>
                        <button onClick={() => handleFinish()}>Finish</button>
                    </>
                ) : null}

                <p>
                    {name} Calories: {(servings * cals).toFixed(2)}
                </p>
                <p>
                    {name} Carbs: {(servings * carbs).toFixed(2)}
                </p>
                <p>
                    {name} Fat: {(servings * fat).toFixed(2)}
                </p>
                <p>
                    {name} Protein: {(servings * protein).toFixed(2)}
                </p>
            </div>
        </>
    );
};

export default MacroSelections;
