import React, { Component } from "react";

import DefaultLayout from "../components/layouts/DefaultLayout";
import { Container } from "reactstrap";


class PageNews extends Component {
    render() {
        return (
            <DefaultLayout>
                <Container>
                    <h1 className="text-center">Page blog</h1>
                </Container>
            </DefaultLayout>
        );
    }
}

export default PageNews;