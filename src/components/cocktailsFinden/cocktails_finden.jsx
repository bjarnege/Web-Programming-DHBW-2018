import React, {Component} from "react"
import {Link} from 'react-router-dom';
import {Content, Drawer, Header, Layout, Navigation} from "react-mdl"
import "./cocktailFinden.css"

class cocktails_finden extends Component {
    render() {
        return (
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
                    <Content></Content>
                </Layout>
            </div>

        )
    }
}

export default cocktails_finden;