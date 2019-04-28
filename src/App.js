import React, { Component } from "react";
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.css";
import {
  Card, Row, Col, Container, CardText, CardBody,
  CardTitle
} from 'reactstrap';
import ReactLoading from "react-loading";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pronostics: [],
      loading: true
    };
  }

  componentDidMount() {
    axios.get('https://apipronos.herokuapp.com/api/rmc')
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
    console.log(this.state.pronostics);
    return (
      <div>
        <Container>
          <Row>

            {this.state.loading ? (
              <div className="mx-auto ">
                <ReactLoading className="mt-5" type="spin" color="#EC4C40" height={60} width={60} />
              </div>
            ) : (this.state.pronostics.map((pronostic, index) => (
              <Col lg="8" key={index} >
                <Card className="mb-4">
                  <CardBody>
                    <CardTitle><b>{pronostic.title}</b></CardTitle>
                    <CardText>Analyse:<br></br><br></br>{pronostic.pronostic}</CardText>
                    <span>Côte : {pronostic.cote}</span><br></br>
                    <span>Mise : {pronostic.mise}</span><br></br>
                    <span>Gains :{pronostic.gains}</span>
                  </CardBody>
                </Card>

              </Col>
            ))
              )}


          </Row>

        </Container>


      </div>
    );
  }
}

export default App;