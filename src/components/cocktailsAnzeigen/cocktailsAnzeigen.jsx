import React, {Component} from "react";
import FetchCocktailAnzeigen from "../fetchCocktailAnzeigen/fetchCocktailAnzeigen";
import Button from "@material-ui/core/Button";
import "./cocktail_anzeigen.css";
import {Link} from 'react-router-dom';
import {Content, Drawer, Header, Layout, Navigation} from "react-mdl";

class cocktailsAnzeigen extends Component {
    state = {};
    cocktails = {
        "Drink1": [["A", "B", "C"], "Beschreibung1", "bild1.jpeg"],
        "Drink2": [["D", "E"], "Beschreibung2", "bild2.jpeg"],
    };

    checkCocktails = () => {
        let temp = this.state;
        for (let cocktail in this.cocktails) {
            if (this.cocktails.hasOwnProperty(cocktail)) {
                temp = this.state;
                temp[cocktail] = [];
                this.setState(temp);
                this.cocktails[cocktail][0].forEach((item, index) => {
                    temp = this.state;
                    if (this.props.location.state.Ingredients[item] === true) {
                        temp[cocktail].push(item);
                    }
                });
            }
        }
        this.setState(temp)
    };


    componentDidMount() {
        this.checkCocktails();
    };

    trigger = true;


    showWarning = () => {
        console.log(this.trigger);
        if (this.trigger) {
            return "Kein Ergebnis gefunden. Bitte erneut suchen."
        }
    };


    render() {

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
                            <h1>Cocktailauswahl</h1>
                            <div>
                                {
                                    Object.keys(this.cocktails).map(function (key, index) {
                                        if (this.state[key]) {

                                            if (this.props.location.state.shopping) {

                                                if (this.cocktails[key][0].every(val => this.state[key].includes(val))) {
                                                    this.trigger = false;
                                                    return <FetchCocktailAnzeigen name={key} cocktails={this.cocktails}
                                                                                  state={this.state} key={key}/>
                                                }
                                            } else {
                                                this.trigger = false;
                                                return <FetchCocktailAnzeigen name={key} cocktails={this.cocktails}
                                                                              state={this.state} key={key}/>
                                            }

                                        }


                                    }, this)
                                }
                            </div>
                            <p>{this.showWarning()}</p>
                            <div className="BackButtonContainer">
                                <Button variant="contained" color="primary" onClick={() => this.props.history.goBack()}>
                                    Zurück
                                </Button>
                            </div>

                        </div>
                    </Content>
                </Layout>
            </div>
        )
    }
};

export default cocktailsAnzeigen;