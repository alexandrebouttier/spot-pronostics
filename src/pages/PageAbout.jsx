import React, { Component } from "react";

import DefaultLayout from "../components/layouts/DefaultLayout";

import { Container } from "reactstrap";

class PageAbout extends Component {
    render() {
        return (
            <DefaultLayout>
                <Container>
                    <h1 className="text-center">Page about "pages/PageAbout.jsx</h1>
                </Container>

            </DefaultLayout>
        );
    }
}

export default PageAbout;