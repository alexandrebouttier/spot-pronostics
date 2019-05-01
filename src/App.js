import React, { Component } from "react";
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.css";
import {
  Collapse, Navbar, NavbarToggler, NavbarBrand, Card, TabContent, TabPane, Nav, Button, CardSubtitle, NavItem, NavLink, Row, Col, Container, CardText, CardBody,
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
      p: [],
      q: [],
      t:[],
      u:[],
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

    axios.get('https://apipronos.herokuapp.com/api/pronostics_info')
      .then((response) => {
        this.setState({
          p: response.data.pronostics,
          loading: false
        });

      })
      .catch(function (error) {
        console.log(error);
      });
    axios.get('https://apipronos.herokuapp.com/api/media_pronos')
      .then((response) => {
        this.setState({
          q: response.data.pronostics,
          loading: false
        });

      })
      .catch(function (error) {
        console.log(error);
      });
      axios.get('https://apipronos.herokuapp.com/api/sporty_trader')
      .then((response) => {
        this.setState({
          t: response.data.pronostics,
          loading: false
        });

      })
      .catch(function (error) {
        console.log(error);
      }); 
      axios.get('https://apipronos.herokuapp.com/api/rue_des_joueurs')
      .then((response) => {
        this.setState({
          u: response.data.pronostics,
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


        <Navbar className="shadow" color="dark" dark expand="md">
          <Container>
            <NavbarBrand href="/">multitipsters</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink className="active" href="#pronostics">Pronostics</NavLink>
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
          <Nav tabs className="container mb-5 navbar-light bg-light sticky-top">
            <NavItem>
              <NavLink
                className={classnames({ active: this.state.activeTab === '1' })}
                onClick={() => { this.toggle('1'); }}
              >
                <img style={{ height: "2em" }} src="https://psmedia.playstation.com/is/image/psmedia/rmc-sport-two-column-01-fr-04oct18_1538648611166?$Icon$" />
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: this.state.activeTab === '2' })}
                onClick={() => { this.toggle('2'); }}
              >
                <img style={{ height: "2em" }} src="http://www.pronostics.info/img/logo2.svg" />
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: this.state.activeTab === '3' })}
                onClick={() => { this.toggle('3'); }}
              >
                <img style={{ height: "2em" }} src="https://www.mediapronos.com/wp-content/uploads/2019/03/logo2-1.png" />
              </NavLink>
            </NavItem>
            <NavItem style={{ backgroundColor:"#394547"}}>
              <NavLink
                className={classnames({ active: this.state.activeTab === '4' })}
                onClick={() => { this.toggle('4'); }}
              >
                <img style={{ height: "2em" }} src="https://www.ruedesjoueurs.com/templates/rdjv3/styles/rdj/images/logo-rdj-white.png" />
              </NavLink>
            </NavItem>
            <NavItem style={{ backgroundColor:"#0F0F0F"}}>
              <NavLink
                className={classnames({ active: this.state.activeTab === '5' })}
                onClick={() => { this.toggle('5'); }}
              >
                <img style={{ height: "2em" }} src="https://www.sportytrader.com/dist/img/logo__sporty.png" />
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

                {this.state.loading ? (
                  <div className="mx-auto ">
                    <ReactLoading className="mt-5" type="spin" color="#EC4C40" height={60} width={60} />
                  </div>
                ) : (this.state.p.map((pronostic, index) => (
                  <Col lg="8" key={index} >
                    <h4>{pronostic.title}</h4>
                    <Card className="mb-4 shadow">
                      <CardBody>
                        <CardSubtitle><b>{pronostic.subtitle}</b></CardSubtitle>
                        <CardText>Analyse:<br></br><br></br>{pronostic.pronostic}</CardText>
                        <span>Auteur: {pronostic.author}</span><br></br>
                      </CardBody>
                    </Card>

                  </Col>
                ))
                  )}


              </Row>
            </TabPane>
            <TabPane tabId="3">
              <Row>

                {this.state.loading ? (
                  <div className="mx-auto ">
                    <ReactLoading className="mt-5" type="spin" color="#EC4C40" height={60} width={60} />
                  </div>
                ) : (this.state.q.map((pronostic, index) => (
                  <Col lg="8" key={index} >
                    <Card className="mb-4 shadow">
                      <CardBody>
                        <CardTitle><b>{pronostic.title}</b></CardTitle>
                        <CardText>Analyse:<br></br><br></br>{pronostic.pronostic}</CardText>
                      </CardBody>
                    </Card>

                  </Col>
                ))
                  )}


              </Row>
            </TabPane>
            <TabPane tabId="4">
              <Row>

                {this.state.loading ? (
                  <div className="mx-auto ">
                    <ReactLoading className="mt-5" type="spin" color="#EC4C40" height={60} width={60} />
                  </div>
                ) : (this.state.u.map((pronostic, index) => (
                  <Col lg="8" key={index} >
                    <Card className="mb-4 shadow">
                      <CardBody>
                        <CardTitle><b>{pronostic.equipe1}</b></CardTitle>
                        <CardText>Analyse:<br></br><br></br>{pronostic.pronostic}</CardText>
                      </CardBody>
                    </Card>

                  </Col>
                ))
                  )}


              </Row>
            </TabPane>
            <TabPane tabId="5">
              <Row>

                {this.state.loading ? (
                  <div className="mx-auto ">
                    <ReactLoading className="mt-5" type="spin" color="#EC4C40" height={60} width={60} />
                  </div>
                ) : (this.state.t.map((pronostic, index) => (
                  <Col lg="8" key={index} >
                    <Card className="mb-4 shadow">
                      <CardBody>
                        <CardTitle><b>{pronostic.equipe1} VS {pronostic.equipe2}</b></CardTitle>
                        <CardText>Date: {pronostic.date} {pronostic.time}</CardText>
                        <CardText>Compétition: {pronostic.competition}</CardText>
                        <CardText>Pronostic: {pronostic.selection}</CardText>
                     
                      </CardBody>
                    </Card>

                  </Col>
                ))
                  )}


              </Row>
            </TabPane>
          </TabContent>


        </Container>


      </div>
    );
  }
}

export default App;