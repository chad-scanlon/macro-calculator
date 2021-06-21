import { weightCreator, testFunction, thatNewNewNew } from "../macroCalc";
const MacroPortions = ({ targets, selectionList }) => {
    // console.log(selectionList);
    // console.log(targets);

    console.log(selectionList);
    return (
        <>
            <div className="quality-box">
                {selectionList
                    ? selectionList.map((selection) => (
                          <>{weightCreator(selection, targets)}</>
                      ))
                    : null}
            </div>
            <div className="portion-box">
                <h4 className="portions-header">Portions</h4>
                {selectionList
                    ? selectionList.map((selection) => (
                          <>
                              {thatNewNewNew(selectionList, targets)}
                              <p>
                                  {selection.servings} servings of{" "}
                                  {selection.name}
                              </p>
                          </>
                      ))
                    : null}
            </div>
        </>
    );
};

export default MacroPortions;
