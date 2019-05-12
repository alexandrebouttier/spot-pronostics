import React, { Component } from "react";
import axios from "axios";
import ReactLoading from "react-loading";
import {
  TabPane,
  Col,
  Row,
  Card,
  CardBody,
  CardText,
  CardTitle,
  Badge
} from "reactstrap";
import PubMobile from "../../PubMobile";
import API from "../../../config";
class RmcTab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pronostics: [],
      loading: true
    };
  }

  componentDidMount() {
    axios
      .get(API + "rmc")
      .then(response => {
        this.setState({
          pronostics: response.data.pronostics,
          loading: false
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  render() {
    return (
      <TabPane tabId="1">
        <Row>
          {this.state.loading ? (
            <div className="mx-auto ">
              <ReactLoading
                className="mt-5"
                type="spin"
                color="#EC4C40"
                height={60}
                width={60}
              />
            </div>
          ) : (
            this.state.pronostics.map((pronostic, index) => (
              <Col lg="12" key={index}>
                <Card className="mb-4 shadow">
                  <Row>
                    <Col md="5" className="pt-4">
                      <div className="pl-3 ">
                        <Badge color="img-title">{pronostic.imageTitle}</Badge>
                        <img
                          alt={pronostic.title}
                          className="img-fluid"
                          src={pronostic.image}
                        />
                      </div>
                    </Col>
                    <Col md="7">
                      <CardBody>
                        <CardTitle>
                          <b>{pronostic.title}</b>
                        </CardTitle>
                        {pronostic.pronostic ? (
                          <CardText>
                            <b>Analyse:</b>
                            <br />
                            <br />
                            {pronostic.pronostic}
                          </CardText>
                        ) : (
                          ""
                        )}

                        <span>
                          <b>Côte : {pronostic.cote}</b>
                        </span>
                        <br />
                        <span>
                          <b>Mise : {pronostic.mise} €</b>
                        </span>
                        <br />
                        <span>
                          <b>Gains : {pronostic.gains} €</b>
                        </span>
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

export default RmcTab;
