import React, { Component } from "react";
import axios from 'axios';
import ReactLoading from "react-loading";
import { TabPane, Col, Row, Card, CardBody, CardText, CardSubtitle } from "reactstrap";
import PubMobile from "../../PubMobile";
import API from "../../../config";
class PronosticsInfoTab extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pronostics: [],
            loading: true,
        };
    }

    componentWillUpdate() {

        axios.get(API + "pronostics_info")
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
            <TabPane tabId="2">
                <Row>

                    {this.state.loading ? (
                        <div className="mx-auto ">
                            <ReactLoading className="mt-5" type="spin" color="#EC4C40" height={60} width={60} />
                        </div>
                    ) : (this.state.pronostics.map((pronostic, index) => (
                        <Col lg="12" key={index} >
                            <h4>{pronostic.title}</h4>
                            <Card className="mb-4 shadow">

                                <Row>
                                    <Col className="mx-auto mt-4 text-center" md="3"><img alt={pronostic.title} src={"http://www.pronostics.info" + pronostic.image} />
                                        <p className="mt-3">{pronostic.author}</p>
                                    </Col>
                                    <Col md="8">
                                        <CardBody>
                                            <CardSubtitle><b>{pronostic.subtitle}</b></CardSubtitle>
                                            <CardText><b>Analyse:</b><br></br><br></br>{pronostic.pronostic}</CardText>

                                            <PubMobile />
                                        </CardBody>
                                    </Col>
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

export default PronosticsInfoTab;