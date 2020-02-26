import React from "react";
import "./fetchCocktail_anzeigen.css";

const fetchCocktailAnzeigen = (props) => {
    const calculatePercentage = (props) => {
        if (props.state[props.name]) {
            let percentage = (props.state[props.name].length / props.cocktails[props.name][0].length) * 100;
            return percentage.toFixed(2)
        }
    };

    return (

        <div className="CocktailListElementWrapper">

                <div className="CocktailListElement">
                    <div className="CocktailListElementDescription">
                        <h2>{props.name}</h2>
                        <h3>{calculatePercentage(props)}% Prozent der Zutaten vorhanden</h3>
                    </div>
                    <div className="CocktailImage">
                        <img className="img" src={require(`../../Images/${props.cocktails[props.name][2]}`)}/>
                    </div>

                </div>
        </div>


    );
};

export default fetchCocktailAnzeigen;