import { useState } from "react";
import axios from "axios";

import MacroSearchResult from "./MacroSearchResult";

const MacroSearch = () => {
    const [selectionList, setSelectionList] = useState([]);

    const [food, setFood] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    };
    const addFoodSelection = (food) => {
        setSelectionList([...selectionList, food]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .get(
                `https://api.edamam.com/api/food-database/v2/parser?ingr=${searchTerm}&app_id=74b105fa&app_key=7b503b28be20406260c90653693bde9f`
            )
            .then((res) => {
                // console.log(res.data.parsed);
                setFood(res.data.parsed);
                setSearchTerm("");
            });
    };
    return (
        <div className="search-container">
            <div className="food-search">
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="enter food"
                        value={searchTerm}
                        onChange={handleChange}
                    />
                    <div>
                        <button className="button">Search</button>
                    </div>
                </form>
            </div>

            {food.map((f) => (
                <div>
                    <MacroSearchResult
                        selectionList={selectionList}
                        addFoodSelection={addFoodSelection}
                        id={f.food.foodId}
                        name={f.food.label}
                        cals={f.food.nutrients.ENERC_KCAL}
                        carbs={f.food.nutrients.CHOCDF}
                        fat={f.food.nutrients.FAT}
                        protein={f.food.nutrients.PROCNT}
                        servings={0}
                    />
                </div>
            ))}
        </div>
    );
};
export default MacroSearch;
