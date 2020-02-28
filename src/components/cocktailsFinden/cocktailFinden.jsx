import React, {Component} from "react"
import {Link} from 'react-router-dom';
import {Content, Drawer, Header, Layout, Navigation} from "react-mdl";
import ZutatenAnwaehlen from "../zutaten_anwaehlen/zutaten_anwaehlen";
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Button from "@material-ui/core/Button";
import "./cocktail_finden.css"

class cocktails_finden extends Component {
    state = {
        Ingredients:{
            "Tequila": false,
            "Orangensaft": false,
            "Grenadine": false,
            "weißer Rum": false,
            "Cola": false,
            "Limettensaft": false,
            "Cointreau": false,
            "Zuckersirup": false,
            "Vodka": false,
            "Cranberrysaft": false,
            "Gin": false,
            "Tonic": false,
            "Basilikum": false
        },
        shopping: {
            "shopping": false
        }
    };

    // Verarbeitung der Auswahl bei Interaktion
    changeChecked = (key, value) => {
        let temp = this.state;
        temp.Ingredients[key] = !temp.Ingredients[key];
        this.setState(temp)
    };
    // Verarbeiten der Auswahl, ob weitere Zutaten gekauft werden sollen
    handleChange = () => {
        let temp = this.state;
        temp.shopping["shopping"] = !temp.shopping["shopping"];
        this.setState(temp)
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
                            <h1>Cocktailsuche</h1>
                            <div className="List">
                                <h3>Zutaten auswählen</h3>
                                {
                                    Object.keys(this.state.Ingredients).map(function (key, index) {
                                        return <ZutatenAnwaehlen ingredient={key} onChange={this.changeChecked}
                                                                 checked={index} key={key}/>
                                    }, this)
                                }
                            </div>
                            <div className="Shopping">
                                {/* Checkbox initialieren die ermöglicht auszuwählen, ob man einkaufen gehen möchte.*/}
                                <h3>Möchtest du einkaufen gehen?</h3>
                                <FormControlLabel
                                    control={<Checkbox color="primary" value="shopping"
                                                       checked={this.state.shopping.shopping}
                                                       onChange={this.handleChange}/>}
                                    label="Nur Cocktails aus vorhandene Zutaten anzeigen."
                                />

                                <div className="ButtonContainer">
                                    <Link to={{
                                        pathname: '/cocktailsAnzeigen',
                                        state: {
                                            Ingredients: this.state.Ingredients,
                                            shopping: this.state.shopping.shopping
                                        }
                                    }}>
                                        <Button className="Button" variant="contained" color="primary">
                                            Cocktails anzeigen
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

export default cocktails_finden;