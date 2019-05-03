import React, { Component } from "react";
import axios from 'axios';
import ReactLoading from "react-loading";
import { TabPane, Col, Row, Card, CardBody, CardText, CardTitle } from "reactstrap";
import PubMobile from "../../PubMobile";
import API from "../../../config";
class RueDesJoueursTab extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pronostics: [],
            loading: true,
        };
    }

    componentDidMount() {

        axios.get(API + "rue_des_joueurs")
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
            <TabPane tabId="4">
                <Row>

                    {this.state.loading ? (
                        <div className="mx-auto ">
                            <ReactLoading className="mt-5" type="spin" color="#EC4C40" height={60} width={60} />
                        </div>
                    ) : (this.state.pronostics.map((pronostic, index) => (
                        <Col lg="12" key={index} >
                            <Card className="mb-4 shadow">
                                <CardBody>
                                    <CardTitle><b>{pronostic.equipe1}</b></CardTitle>
                                    <CardText><b>Analyse:</b><br></br><br></br>{pronostic.pronostic}</CardText>
                                    <PubMobile />
                                </CardBody>
                            </Card>

                        </Col>
                    ))
                        )}


                </Row>
            </TabPane>
        );
    }
}

export default RueDesJoueursTab;