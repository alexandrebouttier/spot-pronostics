import React, { Component } from "react";

import DefaultLayout from "../components/layouts/DefaultLayout";

import { Container } from "reactstrap";

class PageBookmakers extends Component {
    render() {
        return (
            <DefaultLayout>
                <Container>
                    <h1 className="text-center">Page Bookmakers</h1>
                </Container>

            </DefaultLayout>
        );
    }
}

export default PageBookmakers;