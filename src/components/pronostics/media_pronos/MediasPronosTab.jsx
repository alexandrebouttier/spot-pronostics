import React, { Component } from "react";
import axios from 'axios';
import ReactLoading from "react-loading";
import { TabPane, Col, Row, Card,Button, CardBody, CardText, CardTitle } from "reactstrap";
import PubMobile from "../../PubMobile";
import API from "../../../config";
import { NavLink } from "react-router-dom";
class MediaPronosTab extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pronostics: [],
            loading: true,
        };
    }

    componentDidMount() {

        axios.get(API + "media_pronos")
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
            <TabPane tabId="3">
                <Row>

                    {this.state.loading ? (
                        <div className="mx-auto ">
                            <ReactLoading className="mt-5" type="spin" color="#EC4C40" height={60} width={60} />
                        </div>
                    ) : (this.state.pronostics.map((pronostic, index) => (
                        <Col lg="12" key={index} >
                            <Card className="mb-4 shadow">
                                <CardBody>
                                    <CardTitle><b>{pronostic.title}</b></CardTitle>
                                    <CardText><b>Analyse:</b><br></br><br></br>{pronostic.pronostic}</CardText>
                                    <NavLink id={pronostic.link} to={`/mediapronos${pronostic.link}`}>
                                            <Button color="red"><b>Lire la suite</b></Button>
                                        </NavLink>
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

export default MediaPronosTab;