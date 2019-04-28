import React, { Component } from "react";
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.css";
import {
  Card, TabContent, TabPane, Nav, Button, NavItem, NavLink, Row, Col, Container, CardText, CardBody,
  CardTitle
} from 'reactstrap';
import ReactLoading from "react-loading";
import classnames from 'classnames';
class App extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1'
    };
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
  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  render() {
    return (
      <div>
        <Container>
          <Nav  tabs className="fixed-top container mb-5 navbar-light bg-light">
            <NavItem>
              <NavLink
                className={classnames({ active: this.state.activeTab === '1' })}
                onClick={() => { this.toggle('1'); }}
              >
               RMC SPORT
            </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: this.state.activeTab === '2' })}
                onClick={() => { this.toggle('2'); }}
              >
                Pronostics Info
            </NavLink>
            </NavItem>
          </Nav>
          <TabContent activeTab={this.state.activeTab} className="mt-5">
            <TabPane tabId="1">
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
            </TabPane>
            <TabPane tabId="2">
              <Row>
                <Col sm="6">
                  <Card body>
                    <CardTitle>Special Title Treatment</CardTitle>
                    <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                    <Button>Go somewhere</Button>
                  </Card>
                </Col>
                <Col sm="6">
                  <Card body>
                    <CardTitle>Special Title Treatment</CardTitle>
                    <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                    <Button>Go somewhere</Button>
                  </Card>
                </Col>
              </Row>
            </TabPane>
          </TabContent>


        </Container>


      </div>
    );
  }
}

export default App;