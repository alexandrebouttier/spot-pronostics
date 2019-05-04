import React, { Component } from "react";
import axios from 'axios';
import ReactLoading from "react-loading";
import { Container, Col, Row, Card, CardBody, CardText, CardTitle, Button } from "reactstrap";
import PubMobile from "../../PubMobile";
import DefaultLayout from "../../layouts/DefaultLayout";
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
        axios.get(API + "sporty_trader/single/" + id)
            .then((response) => {
                this.setState({
                    pronostic: response.data.pronostic,
                    loading: false
                });

            })
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {
        console.log(this.state.pronostic);
        return (
            <DefaultLayout>
                <Container className="mt-5">
                    <Row>

                        {this.state.loading ? (
                            <div className="mx-auto ">
                                <ReactLoading className="mt-5" type="spin" color="#EC4C40" height={60} width={60} />
                            </div>
                        ) : (this.state.pronostic.map((pronostic, index) => (
                            <Col lg="12" key={index} >
                                <Card className="mb-4 shadow">
                                    <CardBody>
                                        <a href="javascript:history.back()">
                                            <Button className="mb-3" color="red">RETOUR</Button>
                                        </a>
                                        <CardTitle><b>{pronostic.equipe1} VS {pronostic.equipe2}  le {pronostic.date}</b>
                
                                        </CardTitle>
                                        <span>{pronostic.league}</span>
                                        <CardText className="mt-4">
                                            <b>PRONOSTIC:</b><br></br><br></br>
                                            {pronostic.selection}<br></br><br></br>
                                        </CardText>

                                        {pronostic.pronostic ? (<CardText>
                                            <b>ANALYSE:</b><br></br><br></br>
                                            {pronostic.pronostic}
                                        </CardText>) : ""}

                                        <CardText>
                                            <b>CONCLUSION:</b><br></br><br></br>
                                            {pronostic.conclusion}
                                        </CardText>
                                        <PubMobile/>
                                    </CardBody>
                                </Card>
                            </Col>
                        ))
                            )}
                    </Row>
                </Container>

            </DefaultLayout>
        );
    }
}

export default SportyTraderAnalyse;