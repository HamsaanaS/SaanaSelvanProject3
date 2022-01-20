// Drinks Component

import { useEffect, useState } from "react";
import axios from "axios";

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
            console.log(response.data.drinks);
            
        }).catch(err => {
            console.log(err);
        })
    }, [userInput] )

    return(
        <>
            <h2>So what we drinking?</h2>
            {drinkResults.map((drinkObj) => {
                return(
                    <div key={drinkObj.idDrink}className="drinkContainer">
                        <img src={drinkObj.strDrinkThumb} alt={drinkObj.strDrink}/>
                        <h3>{drinkObj.strDrink}</h3>
                        <p>{drinkObj.strInstructions}</p>
                    </div>
                );
            })}
        </>
    )
}

export default Drinks;