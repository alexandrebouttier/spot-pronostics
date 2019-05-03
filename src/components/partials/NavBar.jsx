import React from "react";
import { NavLink as RRNavLink } from "react-router-dom";
import { Collapse, Navbar, NavbarToggler, Nav, Container, NavbarBrand, NavItem, NavLink } from "reactstrap";

class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <Navbar className="shadow" color="dark" dark expand="md">
        <Container>
          <NavbarBrand href="/">multitipsters</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink tag={RRNavLink} to="/" className="nav-link">Pronostics</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={RRNavLink} to="/news" className="nav-link">Actualités</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={RRNavLink} to="/conseils" className="nav-link">Conseils</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={RRNavLink} to="/bookmakers" className="nav-link">Bookmakers</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default NavBar;