import React, {Component} from "react"
import "./Rezept.css"
import {Link} from "react-router-dom";
import {Content, Drawer, Header, Layout, Navigation} from "react-mdl";

/* Dies ist die Rezeptseite, hier werd der Cocktail verarbeitet und dem Anwender gezeigte was er noch benötigt bzw. wie der Cocktail zuzubereiten ist.*/

class Rezept extends Component {

    // Überprüfen ob und welche Zutaten fehlen
    fehlend = (einkaufen) => {
        if (einkaufen.length > 0) {
            return (
                <div>
                    {Object.keys(einkaufen).map(function (key, index) {
                            return <li key={key}>{einkaufen[index]}</li>
                        }, this)}
                </div>)
        }
    };

    render() {
        // Initialisieren der benötigten Variablen
        const props = this.props.location.state;
        const cocktails_alle = props.cocktails[props.name][0];
        const einkaufen = props.cocktails[props.name][0].filter(x => !props.state[props.name].includes(x));

        return (
            <div ClassName="Border">
                <Layout>
                    <Header align="center" title="Auswahlmenü" scroll>
                    </Header>
                    <Drawer title="Auswahlmenü">
                        <Navigation>
                            <a href="/">Zutaten angeben</a>
                            <Link style={{color: '#d'}} to={{
                                pathname: '/cocktailsAnzeigen',
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
                            <h1>{props.name}</h1>
                            <div className="textField">
                                <div>
                                    {/* Rendern die benötigten Zutaten*/}
                                    <h3>Benötigte Zutaten</h3>
                                    {
                                        Object.keys(cocktails_alle).map(function (key, index) {
                                            return <li key={key}>{cocktails_alle[key]}</li>
                                        }, this)
                                    }

                                </div>
                                <div>
                                    {/* Rendern die fehleden Zutaten mittels der "fehlend"-Funktion*/}
                                    <h3>Fehlende Zutaten</h3>
                                    {this.fehlend(einkaufen)}
                                </div>
                                <div>
                                    {/* Render der Zubereitungsschritte */}
                                    <h4>Zubereitung</h4>
                                    <p>{props.cocktails[props.name][1]}</p>
                                </div>
                            </div>
                            <div className="RecipeCocktailImage">
                                <img className="RecipeImg"
                                     src={require(`../../Images/${props.cocktails[props.name][2]}`)}/>
                            </div>
                        </div>

                    </Content>
                </Layout>
            </div>
        )
    }
}

export default Rezept;