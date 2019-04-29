import React, { Component } from "react";
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.css";
import {
  Collapse, Navbar, NavbarToggler, NavbarBrand, Card, TabContent, TabPane, Nav, Button, NavItem, NavLink, Row, Col, Container, CardText, CardBody,
  CardTitle, Jumbotron
} from 'reactstrap';
import ReactLoading from "react-loading";
import classnames from 'classnames';
import "./css/styles.css";
class App extends Component {
  constructor(props) {
    super(props);
    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
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
  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  render() {
    return (
      <div>


        <Navbar color="dark" dark expand="md">
          <Container>
            <NavbarBrand href="/">multitipsters</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
              <NavItem>
                  <NavLink href="/">Pronostics</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/">Actualités</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/">Conseils</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/">Bookmakers</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>

        <Jumbotron>
          <Container>
            <h1>multiTipsters</h1>
            <p className="lead">Retrouvez plusieurs pronostics de différentes sources en 1 seul site.</p>
            <hr className="my-2" />
          </Container>

        </Jumbotron>
        <Container>
          <Nav tabs className="container mb-5 navbar-light bg-light sticky-top">
            <NavItem>
              <NavLink
                className={classnames({ active: this.state.activeTab === '1' })}
                onClick={() => { this.toggle('1'); }}
              >
                <img style={{ height:"2em" }} src="https://psmedia.playstation.com/is/image/psmedia/rmc-sport-two-column-01-fr-04oct18_1538648611166?$Icon$"/>
            </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: this.state.activeTab === '2' })}
                onClick={() => { this.toggle('2'); }}
              >
               <img style={{ height:"2em" }} src="http://www.pronostics.info/img/logo2.svg"/>
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
                    <Card className="mb-4 shadow">
                      <CardBody>
                        <CardTitle><b>{pronostic.title}</b></CardTitle>
                        <CardText>Analyse:<br></br><br></br>{pronostic.pronostic}</CardText>
                        <span>Côte : {pronostic.cote}</span><br></br>
                        <span>Mise : {pronostic.mise}</span><br></br>
                        <span>Gains : {pronostic.gains} €</span>
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