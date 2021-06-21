import "./App.css";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useParams, useHistory } from "react-router-dom";
import { MacroContext } from "./contexts/MacroContext";

const MacroView = () => {
    const { food, setFood } = useContext(MacroContext);
    console.log(food);
    const [macroGoals, setMacroGoals] = useState({
        cal: 2500,
        c: 250,
        f: 50,
        p: 150,
    });
    const [macroTotals, setMacroTotals] = useState({
        cal: 0,
        c: 0,
        f: 0,
        p: 0,
    });
    const [portionState, setPortionState] = useState([
        { food: "", quantity: "" },
    ]);
    const [selections, setSelections] = useState([]);
    const [isSelected, setIsSelected] = useState({ selected: false });

    let totals = 0;
    return (
        <>
            <div className="macro-holder">
                <div>
                    <h3>Limits</h3>
                </div>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-evenly",
                    }}
                >
                    <p>{macroGoals.cal} calories</p>
                    <p>{macroGoals.c}g carbs</p>
                    <p>{macroGoals.f}g fats</p>
                    <p>{macroGoals.p}g protein</p>
                </div>
                <div style={{ height: "1000px", border: "solid black 2px" }}>
                    <div className="food-container">
                        <h3>Foods</h3>

                        <>
                            <div
                                style={{
                                    border: "solid black 2px",
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "self-start",
                                    width: "200px",
                                    height: "500px",
                                    marginLeft: "20px",
                                }}
                            >
                                {food.map((f) => (
                                    <>
                                        <p>- {f.name}</p>
                                        <button
                                            onClick={(e) => {
                                                axios
                                                    .put(
                                                        `http://localhost:5001/api/foods/${f.id}`,
                                                        isSelected
                                                    )
                                                    .then((res) => {
                                                        console.log(res);
                                                        setIsSelected({
                                                            selected: true,
                                                        });
                                                        {
                                                            setMacroTotals({
                                                                cal: (f.cals +=
                                                                    f.cals),
                                                            });
                                                        }
                                                    })
                                                    .catch((err) => {
                                                        console.log(
                                                            err.response
                                                        );
                                                    });
                                                console.log("add", f.id);
                                                console.log(f.selected);
                                            }}
                                        >
                                            Add
                                        </button>
                                    </>
                                ))}
                            </div>
                        </>
                    </div>
                    <div className="food-selections">
                        <h3>Selections</h3>
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "space-evenly",
                            }}
                        >
                            {food.map((f) =>
                                f.selected === true ? (
                                    <>
                                        <div
                                            style={{
                                                display: "flex",
                                                flexDirection: "column",
                                            }}
                                        >
                                            <p>{f.name}</p>
                                            {(totals = f.cals)}
                                        </div>
                                    </>
                                ) : null
                            )}
                        </div>
                    </div>
                    <div>
                        {" "}
                        <h3>Output</h3>
                        <div>
                            <p>{macroTotals.cal}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MacroView;
