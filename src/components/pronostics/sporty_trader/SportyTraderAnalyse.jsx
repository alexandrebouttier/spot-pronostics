import React, { Component } from "react";
import axios from 'axios';
import ReactLoading from "react-loading";
import { TabPane, Col, Row, Card, CardBody, CardText, CardTitle, Button } from "reactstrap";
import PubMobile from "../../PubMobile";
import API from "../../../config";
class SportyTraderAnalyse extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pronostic: [],
            loading: true,
        };
    }

    componentDidMount() {

        axios.get(API + "sporty_trader")
            .then((response) => {
                this.setState({
                    pronostics: response.data.pronostics,
                    loading: false
                });

            })
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {
        return (
            <div>

                
            </div>
        );
    }
}

export default SportyTraderAnalyse;