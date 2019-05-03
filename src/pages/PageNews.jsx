import React, { Component } from "react";

import DefaultLayout from "../components/layouts/DefaultLayout";
import {
    Container, Row, Col, Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from "reactstrap";

import axios from 'axios';
import ReactLoading from "react-loading";

import API from "../config";
class PageNews extends Component {
    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            loading: true,
        };
    }

    componentDidMount() {

        axios.get(API + "so_foot")
            .then((response) => {
                this.setState({
                    articles: response.data.articles,
                    loading: false
                });

            })
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {
        return (
            <DefaultLayout>
                <Container>
                    <h1 className="text-center">Page blog</h1>

                    <Row>

                        {this.state.loading ? (
                            <div className="mx-auto ">
                                <ReactLoading className="mt-5" type="spin" color="#EC4C40" height={60} width={60} />
                            </div>
                        ) : (this.state.articles.map((article, index) => (
                            <Col lg="4">

                                <Card>
                                    <CardImg top width="100%" src={article.image} alt="Card image cap" />
                                    <CardBody>
                                        <CardTitle>{article.title}</CardTitle>
                                        <CardSubtitle>{article.sousTitre}</CardSubtitle>
                                        <CardText>{article.descriptif}</CardText>
                                        <Button>Lire la suite</Button>
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

export default PageNews;