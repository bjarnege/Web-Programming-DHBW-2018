import React, {Component} from "react";
import Button from "@material-ui/core/Button";
import {Link} from "react-router-dom";
import "./Rezept.css"
import {Content, Drawer, Header, Layout, Navigation} from "react-mdl";

class Rezept extends Component {
    missing = (einkaufen) => {
        if (einkaufen.length > 0) {
            return (
                <div className="MissingIngredients">
                    <h2>Benötigte Zutaten</h2>
                    {
                        Object.keys(einkaufen).map(function (key, index) {
                            return <p key={key}>{einkaufen[index]}</p>
                        }, this)
                    }
                </div>
            )
        }
    };

    render() {

        const props = this.props.location.state;
        const gesamt = props.cocktails[props.name][0];
        const einkaufen = props.cocktails[props.name][0].filter(x => !props.state[props.name].includes(x));

        return (
            <div className="layout">
                <Layout>
                    <Header align="center" title="Auswahlmenü" scroll>
                    </Header>
                    <Drawer title="Auswahlmenü">
                        <Navigation>
                            <a href="/">Zutaten angeben</a>
                            <Link style={{color: '#d'}} to={{
                                pathname: '/CocktailsAnzeigen',
                                state: {
                                    Ingredients: false,
                                    shopping: false
                                }
                            }}
                            >Rezeptbuch ansehen
                            </Link>
                        </Navigation>
                    </Drawer>
                    <Content>
                        <div className="Frame">
                            <h1>{props.name}</h1>
                            <div className="RecipeCocktailImage">
                                <img className="RecipeImg"
                                     src={require(`../../Images/${props.cocktails[props.name][2]}`)}/>
                            </div>
                            <div className="RecipeInfoContainer">
                                <div className="NeededIngredients">
                                    <h2>Vorhandene Zutaten</h2>
                                    {
                                        Object.keys(gesamt).map(function (key, index) {
                                            return <p key={key}>{gesamt[key]}</p>
                                        }, this)
                                    }
                                </div>
                                {this.missing(einkaufen)}
                                <div className="Preparation">
                                    <h2>Zubereitung</h2>
                                    <p>{props.cocktails[props.name][1]}</p>
                                </div>
                                <div className="BackButtonContainer">
                                    <Link to={{pathname: '/'}}>
                                        <Button className="Button" variant="contained" color="primary"
                                                onClick={() => this.props.history.goBack()}>
                                            Zurück
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </Content>
                </Layout>
            </div>
        )
    }
}

export default Rezept;