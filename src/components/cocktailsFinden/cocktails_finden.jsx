import React, {Component} from "react"
import {Link} from 'react-router-dom';
import {Content, Drawer, Header, Layout, Navigation} from "react-mdl";
import Zutaten_anwaehlen from "../zutaten_anwaehlen/zutaten_anwaehlen";
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Button from "@material-ui/core/Button";
import "./cocktailFinden.css"

class cocktails_finden extends Component {
                    // Zutaten werden manuell eingegeben
                    state = {
                            ingredients: {
                                "Zutat A" : false,
                                "Zutat B " : false,
                                "Zutat C" : false,
                                "Zutat D" : false,
                                "Zutat E" : false,
                            },

                    shopping: {
                                "shopping" : false
                            }
                        };

                        // Verarbeitung der Auswahl bei Interaktion
                        changeChecked = (key, value) => {
                            let temp = this.state;
                            temp.ingredients[key] = !temp.ingredients[key];
                            this.setState(temp)
                        };
                        // Verarbeiten der Auswahl, ob weitere Zutaten gekauft werden sollen
                        handleChange = () => {
                                    let temp = this.state;
                                    temp.shopping["shopping"] = !temp.shopping["shopping"];
                                    this.setState( temp)
                                };

                    render() {
                                        return (
                                            <div className="layout">
                                                <Layout>
                                                    <Header title="Auswahlmenü" scroll>
                                                    </Header>
                                                    <Drawer title="Auswahlmenü">
                                                        <Navigation>
                                                            <a>Zutaten angeben</a>
                                                            <a>Rezeptbuch ansehen</a>
                                                        </Navigation>
                                                    </Drawer>
                                                    <Content>
                                                        <div className="Frame">
                                                            <h1>Cocktailsuche</h1>
                                                            <div className="List">
                                                                <h3>Zutaten auswählen</h3>
                                                            {
                                                                Object.keys(this.state.ingredients).map(function (key, index) {
                                                                    return <Zutaten_anwaehlen ingredient={key} onChange={this.changeChecked} checked={index} key={key}/>
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