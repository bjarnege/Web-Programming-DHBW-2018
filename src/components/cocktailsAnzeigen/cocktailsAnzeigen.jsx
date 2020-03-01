import React, {Component} from "react";
import FetchCocktailAnzeigen from "../fetchCocktailAnzeigen/fetchCocktailAnzeigen";
import Button from "@material-ui/core/Button";
import "./cocktail_anzeigen.css";
import {Link} from 'react-router-dom';
import {Content, Drawer, Header, Layout, Navigation} from "react-mdl";

class cocktailsAnzeigen extends Component {
    //Initialisieren der Variablen
    check_pct = this.props.location.state.show_pct;
    state = {};

    // Hier werden die Cocktails hinzugefüht.
    cocktails = {
        "Tequila Sunrise": [["Tequila", "Orangensaft", "Grenadine"], "Den Tequila, Orangen- und Zitronensaft zusammen mit ein paar Eiswürfeln shaken. Eiswürfel in ein Glas geben und den Cocktail durch ein Barsieb eingießen. Die Grenadine an einem Löffel in den Cocktail fließen lassen.\n Zum Abschluss nach Belieben garnieren (z.B. mit einer Orangenscheibe).", "tequila.jpeg"],
        "Cuba Libre": [["weißer Rum", "Cola", "Limettensaft"], "Die Limette in Achteln über dem Glas ausdrücken und hinein geben. Dann Eiswürfel oder Crushed Ice dazugeben und mit Rum, Cola und Limettensaft auffüllen.", "cubalibre.jpeg"],
        "Margarita": [["Tequila", "Cointreau", "Limettensaft", "Zuckersirup"], "Für den Salzrand das Margaritaglas zuerst in Limettensaft und dann vorsichtig in Salz eintauchen. Die Zutaten einfach zusammen mit Eis shaken und in das vorbereitete Glas geben. Klassisch mit einer Limettenscheibe garnieren.", "margarita.jpeg"],
        "Cosmopolitan": [["Vodka", "Cranberrysaft", "Limettensaft", "Cointreau"], "Den Wodka, Cranberrysaft, Limettensaft, Eiswürfel und den Cointreau/Triple in den Cocktailshaker geben. Den Cocktailshaker verschließen und einige Sekunden gut schütteln. Den Cosmopoliton durch ein Sieb in vier Cocktailschalen oder Gläser gießen und mit einem Stück Limette garnieren.", "cosmopolitan.jpeg"],
        "Lime & Basil Gin Tonic": [["Gin", "Tonic", "Basilikum", "Limettensaft"], "Gläser mit Eis füllen und 1 Stunde ins Gefrierfach stellen. Limettenzesten, 2 Zweige Basilikum, Gin und Lillet in den Shaker geben. Mit einem Stößel leicht anmuddeln. Shaker bis zur Kante mit Eis füllen und 15 Sekunden kräftig schütteln. Durch ein Sieb in die geeisten Gläser füllen. Mit Tonic Water aufgießen. Limettenzesten drehen, um die ätherischen Öle freizusetzen, und mit dem restlichen Basilikum in die Gläser stecken.", "gintonic.jpeg"],

    };

    // Überprüfen, welche Zutaten benötigt werden bzw. vorhanden sind.
    cocktailsChecken = () => {
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


    // Triggern der obigen Überprüfung
    componentDidMount() {
        this.cocktailsChecken();
    };

    /* Initialsieren der trigger-Variable
    Diese Variable wird auf false gesetzt, wenn aus den vorhandenen Zutaten ein Cocktail erstellt werden kann.*/
    trigger = true;


    // Sofern keine Cocktails verfügbar sind, gib eine Warnung aus
    warnungAnzeigen = () => {
        if (this.trigger) {
            return "Kein Ergebnis gefunden. Bitte erneut suchen."
        }
    };

    // Rendern des HTML-Codes
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
                                    shopping: false,
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
                                {/*Übergeben des states an die Komponente FetchCocktailAnzeigen und rendern der Ausgabe dieser*/
                                    Object.keys(this.cocktails).map(function (key, index) {
                                        if (this.state[key]) {

                                            if (this.props.location.state.shopping) {

                                                if (this.cocktails[key][0].every(val => this.state[key].includes(val))) {
                                                    this.trigger = false;
                                                    return <FetchCocktailAnzeigen show_pct={this.check_pct} name={key}
                                                                                  cocktails={this.cocktails}
                                                                                  state={this.state} key={key}/>
                                                }
                                            } else {
                                                this.trigger = false;
                                                return <FetchCocktailAnzeigen show_pct={this.check_pct} name={key}
                                                                              cocktails={this.cocktails}
                                                                              state={this.state} key={key}/>
                                            }

                                        }


                                    }, this)
                                }
                            </div>
                            {/* Verwendung der definierten Funktion warnungAnzeigen*/}
                            <p>{this.warnungAnzeigen()}</p>
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