import React, { Component } from "react";

import DefaultLayout from "../components/layouts/DefaultLayout";
import axios from 'axios';
import { Container } from "reactstrap";

class PageConseils extends Component {


    render() {

        return (
            <DefaultLayout>
                <Container>
                    <h1 className="text-center">Page conseils</h1>
                </Container>

            </DefaultLayout>
        );
    }
}

export default PageConseils;