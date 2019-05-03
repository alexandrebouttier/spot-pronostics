import React from "react";
import NavBar from "../partials/NavBar";



class DefaultLayout extends React.Component {
  render() {
    return (
      <div id="app">
        <NavBar />

        {this.props.children}


      </div>
    );
  }
}

export default DefaultLayout;