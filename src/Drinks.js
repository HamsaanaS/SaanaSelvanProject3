// Drinks Component

import { useEffect, useState } from "react";
import axios from "axios";

import AllIngredients from "./AllIngredients.js";

function Drinks({userInput}) {

    const [drinkResults, setDrinkResults] = useState([]);

    useEffect(() => {
        axios({
            url: "https://www.thecocktaildb.com/api/json/v1/1/search.php",
            method: "GET",
            dataResponse: "json",
            params: {
                s: userInput,
            }
        }).then((response) => {
            setDrinkResults(response.data.drinks);            
        }).catch(err => {
            console.log(err);
        })
    }, [userInput] )

    return(
        <>
            {drinkResults.map((drinkObj) => {
                return(
                    <div key={drinkObj.idDrink} className="drinkContainer">
                        <div className="imgContainer">
                            <img src={drinkObj.strDrinkThumb} alt={drinkObj.strDrink}/>
                        </div>
                        <div className="recipeContainer">
                            <h3>{drinkObj.strDrink}</h3>
                            <AllIngredients drinkObj={drinkObj}/>
                            <p>{drinkObj.strInstructions}</p>
                        </div>
                    </div>
                );
            })}
        </>
    )
}

export default Drinks;