import React from "react";
import {Link} from "react-router-dom"

const fetchCocktailAnzeigen = (props) => {
    const calculatePercentage = (props) => {
        if (props.state[props.name]) {
            let percentage = (props.state[props.name].length / props.cocktails[props.name][0].length) * 100;
            return percentage.toFixed(2)
        }
    };

    return (<div className="CocktailListElementWrapper">
            <Link to={{
                pathname: '/Rezept',
                state: {
                    name: props.name,
                    cocktails: props.cocktails,
                    state: props.state
                }
            }}
            >
                <div className="CocktailListElement">
                    <div className="CocktailListElementDescription">
                        <h2>{props.name}</h2>
                        <h3>{calculatePercentage(props)}% of ingredients in stock</h3>
                    </div>
                    <div className="CocktailImage">
                        <img className="img" src={require(`../../Images/${props.cocktails[props.name][2]}`)}/>
                    </div>

                </div>
            </Link>
        </div>
    );
};

export default fetchCocktailAnzeigen;