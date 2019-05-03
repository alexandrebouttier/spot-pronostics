import React from "react";
import ReactDOM from "react-dom";

import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.css";
import "./css/styles.css";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import PageHome from "./pages/PagePronostics";
import PageNews from "./pages/PageNews";
import PageConseils from "./pages/PageConseils";
import PageBookmakers from "./pages/PageBookmakers";
import ScrollToTop from "react-router-scroll-top";


const Root = () => (
  <BrowserRouter onUpdate={() => window.scrollTo(0, 0)}>
    <Switch>
      <ScrollToTop>
        <Route exact path="/" component={PageHome} />
        <Route exact path="/news" component={PageNews} />
        <Route exact path="/conseils" component={PageConseils} />
        <Route exact path="/bookmakers" component={PageBookmakers} />
      </ScrollToTop>
    </Switch>
  </BrowserRouter>
);

ReactDOM.render(<Root />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();