// Ingredient List 

import {useState} from 'react';

function Drink({drinkObj}) {

    const [ingredientList, setIngredientList] = useState([]);

    function ingMeas(){

        const ingredients = [];
        const measurements = [];
        const comboArray = [];

        
        for(const property in drinkObj) {
            if(property.includes("strIngredient") && drinkObj[property] !== null ){
                ingredients.push(drinkObj[property]);
            }else if(property.includes("strMeasure") && drinkObj[property] !== null) {
                measurements.push(drinkObj[property]); 
            }
        }

        for (let i = 0; i < ingredients.length; i = i + 1){
            if(measurements[i] === undefined){
                measurements[i] = "";
            }
        } 

        ingredients.forEach((ingredient, index) => {
            if(measurements.length > index){
                const comboObj = {ingredient: ingredient, measurement:measurements[index]};
                comboArray.push(comboObj);
            } else {
                const comboObj = {ingredient:ingredient, measurement:null};
                comboArray.push(comboObj);
            } 

            setIngredientList(comboArray);
        })
    }

    ingMeas();

    return(
        <>
            <ul>
                { ingredientList.map((listItem) => {
                    
                    return(
                    
                        { listItem.measurement ? <li>{listItem.ingredient }{listItem.measurement}</li> : <li>{listItem.ingredient}</li> }
                    );
                })}
                
            </ul>
        </>
    );
}

export default Drink;