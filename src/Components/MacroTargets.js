import { useContext, useState } from "react";
import { MacroContext } from "../contexts/MacroContext";

const MacroTargets = () => {
    const { storeTargets } = useContext(MacroContext);
    const [targetState, setTargetState] = useState(false);
    const [targets, setTargets] = useState({
        cals: 0,
        c: 0,
        f: 0,
        p: 0,
    });

    const [formState, setFormState] = useState({
        cals: "",
        c: "",
        f: "",
        p: "",
    });
    const handleChange = (e) => {
        e.persist();
        const newFormData = {
            ...formState,
            [e.target.name]: e.target.value,
        };
        setFormState(newFormData);
        // console.log(formState);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        setTargets(formState);
        storeTargets(formState);
        setFormState({
            cals: 0,
            c: 0,
            f: 0,
            p: 0,
        });
        setTargetState(true);
    };
    return (
        <>
            <div className="targets-container">
                {!targetState ? (
                    <form className="target-box" onSubmit={handleSubmit}>
                        <span className="limit-span">
                            Set your macro limits
                        </span>
                        <input
                            className="input-style"
                            type="text"
                            name="cals"
                            placeholder="cals"
                            value={formState.cals}
                            onChange={handleChange}
                        />
                        <input
                            className="input-style"
                            type="text"
                            name="c"
                            placeholder="carbs"
                            value={formState.c}
                            onChange={handleChange}
                        />
                        <input
                            className="input-style"
                            type="text"
                            name="f"
                            placeholder="fat"
                            value={formState.f}
                            onChange={handleChange}
                        />
                        <input
                            className="input-style"
                            type="text"
                            name="p"
                            placeholder="protein"
                            value={formState.p}
                            onChange={handleChange}
                        />
                        <button className="button">Set Macros</button>
                    </form>
                ) : (
                    <div className="targets-displayed-box">
                        <p>Calories: {targets.cals}</p>
                        <p>Carbs: {targets.c}</p>
                        <p>Fat: {targets.f}</p>
                        <p>Protein: {targets.p}</p>
                    </div>
                )}
            </div>
        </>
    );
};

export default MacroTargets;
