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
        console.log(id);
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