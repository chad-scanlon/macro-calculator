import { useState } from "react";
import "./App.css";
import { MacroContext } from "./contexts/MacroContext.js";
import MacroTargets from "./Components/MacroTargets";
import MacroSearch from "./Components/MacroSearch";
import MacroOutput from "./Components/MacroOutput";

function App() {
    const [macros, setMacros] = useState([]);
    const [portions, setPortions] = useState([]);
    const [targets, setTargets] = useState({
        cals: 0,
        c: 0,
        f: 0,
        p: 0,
    });

    const addToMacros = (macro) => {
        setMacros([...macros, macro]);
    };
    const storeTargets = (target) => {
        setTargets(target);
    };
    const calculatePortions = () => {
        console.log("magic function");
    };
    return (
        <>
            <MacroContext.Provider
                value={{
                    macros,
                    setMacros,
                    addToMacros,
                    targets,
                    setTargets,
                    storeTargets,
                    portions,
                    setPortions,
                    calculatePortions,
                }}
            >
                <div className="App">
                    <h1>Welcome to the Macro Calculator</h1>
                    <div className="targets">
                        <MacroTargets />
                        <div className="output container">
                            <MacroOutput
                                macros={macros}
                                targets={targets}
                                portions={portions}
                            />
                        </div>
                    </div>
                    <MacroSearch />
                </div>
            </MacroContext.Provider>
        </>
    );
}

export default App;
