import React from "react";
import {Link} from "react-router-dom"
import "./fetchCocktail_Anzeigen.css"
import Button from "@material-ui/core/Button"

const fetchCocktailAnzeigen = (props) => {
    const calculatePercentage = (props) => {
        if (props.state[props.name]) {
            let percentage = (props.state[props.name].length / props.cocktails[props.name][0].length) * 100;
            return percentage.toFixed(2)
        }
    };

    return (

        <div className="CocktailListElementWrapper">
            <Link to={{
                pathname: '/Rezept',
                state: {
                    name: props.name,
                    cocktails: props.cocktails,
                    state: props.state,
                    ingredients: props.cocktails.ingredients
                }
            }}
            >
                <div className="CocktailListElement">

                    <div className="CocktailListElementDescription">
                        <div>
                            <h2 align="left">{props.name}</h2>
                            <h4 align="left">{calculatePercentage(props)}% der Zutaten verfügbar.</h4>


                        </div>
                        <div className="CocktailImage">
                            <img className="img" src={require(`../../Images/${props.cocktails[props.name][2]}`)}/>
                        </div>
                        <div className="ShowMoreButton">
                            <Button className="" variant="contained" color="primary">
                                Rezept ansehen
                            </Button>
                        </div>
                        <hr color="black" width="100%"/>

                    </div>
                </div>
            </Link>
        </div>
    );
};

export default fetchCocktailAnzeigen;