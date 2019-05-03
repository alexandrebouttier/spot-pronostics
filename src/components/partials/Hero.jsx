import React from "react";
import { Jumbotron, Container } from "reactstrap";


class Hero extends React.Component {
    render() {
        return (
            <Jumbotron>
                <Container>
                    <h1>multiTipsters</h1>
                    <p className="lead">Retrouvez plusieurs pronostics de différentes sources en 1 seul site.</p>
                    <hr className="my-2" />
                </Container>

            </Jumbotron>
        );
    }
}

export default Hero;