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
            loading: true,
            pronostic: []
        };
    }

    componentDidMount() {
        const { id } = this.props.match.params;
        axios.get(API + "sporty_trade/single/"+id)
        .then((response) => {
            this.setState({
                pronostic: response.data.pronostics,
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

                <h1>dsds</h1>
            </div>
        );
    }
}

export default SportyTraderAnalyse;