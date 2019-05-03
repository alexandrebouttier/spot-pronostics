import React, { Component } from "react";
import axios from 'axios';
import ReactLoading from "react-loading";
import { TabPane, Col, Row, Card, CardBody, CardText, CardTitle, Button } from "reactstrap";
import PubMobile from "../../PubMobile";
import API from "../../../config";
class SportyTraderTab extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pronostics: [],
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
            <TabPane tabId="5">
                <Row>

                    {this.state.loading ? (
                        <div className="mx-auto ">
                            <ReactLoading className="mt-5" type="spin" color="#EC4C40" height={60} width={60} />
                        </div>
                    ) : (this.state.pronostics.map((pronostic, index) => (
                        <Col lg="12" key={index} >
                            <Card className="mb-4 shadow">
                                <Row>
                                    <Col md="5" className="v-center">
                                        <div className="mx-auto">
                                            <img alt={pronostic.equipe1} style={{ height: "7em" }} className="img-fluid mr-2" src={pronostic.equipe1_img} />
                                            <img alt={pronostic.equipe2} style={{ height: "7em" }} className="img-fluid" src={pronostic.equipe2_img} />
                                        </div>

                                    </Col>
                                    <Col md="7"> <CardBody>
                                        <CardTitle><b>{pronostic.equipe1} VS {pronostic.equipe2}</b></CardTitle>
                                        <CardText><b>Date: </b>{pronostic.date} {pronostic.time}</CardText>
                                        <CardText><b>Compétition:</b> {pronostic.competition}</CardText>
                                        <CardText><b>Pronostic:</b> {pronostic.selection}</CardText>
                                        <Button color="red"><b>Voir l'analyse</b></Button>
                                        <PubMobile />
                                    </CardBody></Col>
                                </Row>
                            </Card>
                        </Col>
                    ))
                        )}
                </Row>
            </TabPane>
        );
    }
}

export default SportyTraderTab;