import MacroSelections from "./MacroSelections";

const MacroSearchResult = (props) => {
    const addToFoodList = () => {
        props.addFoodSelection({
            id: props.id,
            name: props.name,
            cals: props.cals,
            carbs: props.carbs,
            fat: props.fat,
            protein: props.protein,
            servings: props.servings,
        });
    };

    return (
        <>
            <div className="food-container">
                <div className="food-item">
                    <p className="macro-datum">{props.name}</p>
                    <p className="macro-datum">{props.cals} calories</p>
                    <p className="macro-datum">{props.carbs}g carbs</p>
                    <p className="macro-datum">{props.fat}g fat</p>
                    <p className="macro-datum">{props.protein}g protein</p>
                    <button className="button" onClick={addToFoodList}>
                        Add Food
                    </button>
                </div>
                {props.selectionList.map((selection) => (
                    <MacroSelections
                        selectionList={props.selectionList}
                        name={selection.name}
                        servings={selection.servings}
                        cals={selection.cals}
                        carbs={selection.carbs}
                        fat={selection.fat}
                        protein={selection.protein}
                    />
                ))}
            </div>
        </>
    );
};
export default MacroSearchResult;
