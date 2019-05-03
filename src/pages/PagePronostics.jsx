import React, { Component } from "react";

import DefaultLayout from "../components/layouts/DefaultLayout";
import { Container, Row, Col } from "reactstrap";
import Hero from "../components/partials/Hero";
import PronosticsNav from "../components/pronostics/PronosticsNav";

class PagePronostics extends Component {
    render() {
        return (
            <DefaultLayout>
                <Hero />
                <Container>
                    <Row className="mb-5">
                        <Col lg="4">
                            <h2>À quoi ça sert ?</h2>
                            MultiTipsters vous simplifie votre recherche de pronostics , fini le temps perdu à chercher à droite a gauche sur différents sites</Col>
                        <Col lg="4">
                            <h2>Pronostics</h2>
                            MultiTipsters met à votre disposition des pronostics de paris sportifs de différents sources de sites affluent.</Col>
                        <Col lg="4">
                            <h2>News</h2>Retrouver toutes les actualités football de vos sites favoris</Col>
                    </Row>
                </Container>

                <Container>
                    <h1 id="pronostics">Pronostics</h1>
                    <p>Choisissez votre source de pronostics</p>
                    <Row>
                        <Col md="8">
                        <PronosticsNav/>
                        </Col>
                        <Col md="3">
                            <a href="https://media.unibet.fr/redirect.aspx?pid=131018&bid=3060"><img alt="" className="img-fluid sticky-top" src="https://media.unibet.fr/renderimage.aspx?pid=131018&bid=3060" /></a>
                        </Col>
                    </Row>
                </Container>
            </DefaultLayout>
        );
    }
}

export default PagePronostics;