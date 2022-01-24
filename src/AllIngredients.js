// All Ingredients Component

import {useState, useEffect} from 'react';

function AllIngredients({drinkObj}) {

    const [ingredientList, setIngredientList] = useState([]);
    const ingredients = [];
    const measurements = [];
    const ingredientsAndMeasurementsArray = [];

    const getIngredientsAndMeasurements = (drinkObj) => {
        
        for(const property in drinkObj) {
            if(property.includes("strIngredient") && drinkObj[property] !== null ){
                ingredients.push(drinkObj[property]);
            }else if(property.includes("strMeasure") && drinkObj[property] !== null) {
                measurements.push(drinkObj[property]); 
            }
        }
    }
    
    useEffect(() => {

        getIngredientsAndMeasurements(drinkObj);

        // Filters through ingredients and measurements
        const filteredIngredientsArray = ingredients.filter(ingredient => ingredient !== "" || null);
        const filteredMeasurementsArray = measurements.filter(measurement => measurement !== "");

        // Combines ingredients and measurements into obj
        filteredIngredientsArray.forEach((ingredient, index) => {

            if(filteredMeasurementsArray.length > index){
                const comboObj = {ingredient: ingredient, measurement:filteredMeasurementsArray[index]};
                ingredientsAndMeasurementsArray.push(comboObj);
            } else {
                const comboObj = {ingredient:ingredient, measurement:null};
                ingredientsAndMeasurementsArray.push(comboObj);
            } 
        })
        setIngredientList(ingredientsAndMeasurementsArray);
        
    }, [] );
    

    return(
        <>
            <ul>
                { ingredientList.map((listItem, index) => {
                    return(
                        <li key={index}>
                            { listItem.measurement 
                            ? `${listItem.measurement} ${listItem.ingredient}`
                            : `${listItem.ingredient}`
                            }
                        </li>
                    );
                })}               
            </ul>
        </>
    );
}

export default AllIngredients;