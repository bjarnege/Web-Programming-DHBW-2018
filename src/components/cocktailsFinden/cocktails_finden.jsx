import React, {Component} from "react"
import {Link} from 'react-router-dom';
import {Content, Drawer, Header, Layout, Navigation} from "react-mdl";
import zutaten_anwaehlen from "../zutaten_anwaehlen/zutaten_anwaehlen";
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Button from "@material-ui/core/Button";
import "./cocktailFinden.css"

class cocktails_finden extends Component {
                    // Zutaten werden manuell eingegeben
                    state = {
                            Ingredients: {
                                "Zutat 1" : false,
                                "Zutat 2" : false,
                                "Zutat 3" : false,
                                "Zutat 4" : false,
                                "Zutat 5" : false,
                                "shopping" : false
                            }
                        };

                        // Verarbeitung der Auswahl bei Interaktion
                        changeChecked = (key, value) => {
                            let temp = this.state;
                            temp.Ingredients[key] = !temp.Ingredients[key];
                            this.setState(temp)
                        };
    render() {
        return (
        /* Initialisierung des Headers und Sidebars*/
            <div className="layout">

                <Layout>
                    <Header title="Auswahlmenü" scroll>
                    </Header>
                    <Drawer title="Auswahlmenü">
                        <Navigation>
                            <a>#</a>
                            <a>#</a>
                        </Navigation>
                    </Drawer>
                    <Content>
                       <div className="Frame">
                            <h1>Cocktail anzeigen</h1>
                             <div className="List">
                                <h3>Auswahlmenü</h3>
                            {
                                Object.keys(this.state.Ingredients).map(function (key, index) {
                                    return <zutaten_anwaehlen ingredient={key} onChange={this.changeChecked} checked={index} key={key}/>
                                }, this)
                            }
                            </div>
                         </div>
                    </Content>
                </Layout>
            </div>

        )
    }
}

export default cocktails_finden;