import React, { Component } from "react";
import classnames from 'classnames';
import { Nav, NavLink, NavItem, TabContent } from "reactstrap";
import RmcTab from "./rmc/RmcTab";
import PronosticsInfoTab from "./pronostics_info/PronosticsInfoTab";
import RueDesJoueursTab from "./rue_des_joueurs/RueDesJoueursTab";
import SportyTraderTab from "./sporty_trader/SportyTraderTab";

class PronosticsNav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: '1'
        };
    }
    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }
    render() {
        return (
            <React.Fragment>
                <Nav tabs className="container mb-5 navbar-light bg-light sticky-top">
                    <NavItem>
                        <NavLink
                            className={classnames({ active: this.state.activeTab === '1' })}
                            onClick={() => { this.toggle('1'); }}
                        >
                            <b>RMC SPORT</b>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: this.state.activeTab === '2' })}
                            onClick={() => { this.toggle('2'); }}
                        >
                            <b>Pronostics Info</b>
                        </NavLink>
                    </NavItem>
           
                    <NavItem>
                        <NavLink
                            className={classnames({ active: this.state.activeTab === '3' })}
                            onClick={() => { this.toggle('3'); }}
                        >
                            <b>Rue des joueurs</b>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: this.state.activeTab === '4' })}
                            onClick={() => { this.toggle('4'); }}
                        >
                            <b>Sporty-trader</b>
                        </NavLink>
                    </NavItem>
                </Nav>
                <TabContent activeTab={this.state.activeTab} className="mt-5">
                    <RmcTab />
                    <PronosticsInfoTab />
                    <RueDesJoueursTab />
                    <SportyTraderTab />
                </TabContent>
            </React.Fragment>
        );
    }
}

export default PronosticsNav;