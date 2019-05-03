import React, { Component } from "react";
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.css";
import {
  Collapse, Navbar, Badge, NavbarToggler, NavbarBrand, Card, TabContent, TabPane, Nav, Button, CardSubtitle, NavItem, NavLink, Row, Col, Container, CardText, CardBody,
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
      pronostics: [],
      p: [],
      q: [],
      t: [],
      u: [],
      loading: true,
      activeTab: '1'
    };
  }

  componentDidMount() {
    this.restartHEROKU();
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
  restartAPI() {

    axios.get('https://apipronos.herokuapp.com')
      .then((response) => {
        console.log("api redemarer")
      })
  }
  restartHEROKU() {
    setInterval(this.restartAPI, 1500000);
  };




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
          <Row>
            <Col md="8">
              <Nav tabs className="container mb-5 navbar-light bg-light sticky-top">
                <NavItem>
                  <NavLink
                    className={classnames({ active: this.state.activeTab === '1' })}
                    onClick={() => { this.toggle('1'); }}
                  >
                    <b>RMC SPORT</b>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={classnames({ active: this.state.activeTab === '2' })}
                    onClick={() => { this.toggle('2'); }}
                  >
                    <b>Pronostics Info</b>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={classnames({ active: this.state.activeTab === '3' })}
                    onClick={() => { this.toggle('3'); }}
                  >
                    <b>MediaPronos</b>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={classnames({ active: this.state.activeTab === '4' })}
                    onClick={() => { this.toggle('4'); }}
                  >
                    <b>Rue des joueurs</b>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={classnames({ active: this.state.activeTab === '5' })}
                    onClick={() => { this.toggle('5'); }}
                  >
                    <b>Sporty-trader</b>
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
                      <Col lg="12" key={index} >
                        <Card className="mb-4 shadow">
                          <Row>
                            <Col md="5" className="pt-4">
                              <div className="pl-3 ">
                                <Badge color="img-title">{pronostic.imageTitle}</Badge>
                                <img className="img-fluid" src={pronostic.image} />
                              </div>
                            </Col>
                            <Col md="7"><CardBody>
                              <CardTitle><b>{pronostic.title}</b></CardTitle>
                              <CardText><b>Analyse:</b><br></br><br></br>{pronostic.pronostic}</CardText>
                              <span><b>Côte : {pronostic.cote}</b></span><br></br>
                              <span><b>Mise : {pronostic.mise} €</b></span><br></br>
                              <span><b>Gains : {pronostic.gains} €</b></span>
                              <div className="text-center mt-3">
                                <a href="https://media.unibet.fr/redirect.aspx?pid=131018&bid=3059"><img className="img-fluid" alt="" src="https://media.unibet.fr/renderimage.aspx?pid=131018&bid=3059" /></a>
                              </div>
                            </CardBody></Col>
                          </Row>



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
                      <Col lg="12" key={index} >
                        <h4>{pronostic.title}</h4>
                        <Card className="mb-4 shadow">

                          <Row>
                            <Col className="mx-auto mt-4 text-center" md="3"><img src={"http://www.pronostics.info" + pronostic.image} />
                              <p className="mt-3">{pronostic.author}</p>
                            </Col>
                            <Col md="8">
                              <CardBody>
                                <CardSubtitle><b>{pronostic.subtitle}</b></CardSubtitle>
                                <CardText><b>Analyse:</b><br></br><br></br>{pronostic.pronostic}</CardText>

                                <div className="text-center mt-3">
                                  <a href="https://media.unibet.fr/redirect.aspx?pid=131018&bid=3059"><img className="img-fluid" alt="" src="https://media.unibet.fr/renderimage.aspx?pid=131018&bid=3059" /></a>
                                </div>
                              </CardBody>
                            </Col>
                          </Row>

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
                      <Col lg="12" key={index} >
                        <Card className="mb-4 shadow">
                          <CardBody>
                            <CardTitle><b>{pronostic.title}</b></CardTitle>
                            <CardText><b>Analyse:</b><br></br><br></br>{pronostic.pronostic}</CardText>
                            <div className="text-center">
                              <a href="https://media.unibet.fr/redirect.aspx?pid=131018&bid=3059"><img className="img-fluid" alt="" src="https://media.unibet.fr/renderimage.aspx?pid=131018&bid=3059" /></a>
                            </div>
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
                      <Col lg="12" key={index} >
                        <Card className="mb-4 shadow">
                          <CardBody>
                            <CardTitle><b>{pronostic.equipe1}</b></CardTitle>
                            <CardText><b>Analyse:</b><br></br><br></br>{pronostic.pronostic}</CardText>
                            <div className="text-center">
                              <a href="https://media.unibet.fr/redirect.aspx?pid=131018&bid=3059"><img className="img-fluid" alt="" src="https://media.unibet.fr/renderimage.aspx?pid=131018&bid=3059" /></a>
                            </div>
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
                      <Col lg="12" key={index} >
                        <Card className="mb-4 shadow">
                          <Row>
                            <Col md="5" className="v-center">
                              <div className="mx-auto">
                                <img style={{ height: "7em" }} className="img-fluid mr-2" src={pronostic.equipe1_img} />
                                <img style={{ height: "7em" }} className="img-fluid" src={pronostic.equipe2_img} />
                              </div>

                            </Col>
                            <Col md="7"> <CardBody>
                              <CardTitle><b>{pronostic.equipe1} VS {pronostic.equipe2}</b></CardTitle>
                              <CardText><b>Date: </b>{pronostic.date} {pronostic.time}</CardText>
                              <CardText><b>Compétition:</b> {pronostic.competition}</CardText>
                              <CardText><b>Pronostic:</b> {pronostic.selection}</CardText>
                              <Button color="red"><b>Voir l'analyse</b></Button>
                              <div className="text-center mt-3">
                                <a href="https://media.unibet.fr/redirect.aspx?pid=131018&bid=3059"><img className="img-fluid" alt="" src="https://media.unibet.fr/renderimage.aspx?pid=131018&bid=3059" /></a>
                              </div>
                            </CardBody></Col>
                          </Row>

                        </Card>

                      </Col>
                    ))
                      )}


                  </Row>
                </TabPane>
              </TabContent>

            </Col>


            <Col md="3" >
              <a href="https://media.unibet.fr/redirect.aspx?pid=131018&bid=3060"><img alt="" className="img-fluid sticky-top" src="https://media.unibet.fr/renderimage.aspx?pid=131018&bid=3060" /></a>
            </Col>
          </Row>
        </Container>


      </div >
    );
  }
}

export default App;