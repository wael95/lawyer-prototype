import React, { Component } from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBIcon
} from "mdbreact";
import { BrowserRouter as Router ,Link} from "react-router-dom";

class Header extends Component {
  state = {
    isOpen: false
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <Router>
        <MDBNavbar color="default-color" scrolling fixed="top" dark expand="md">
          <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
            <MDBNavbarNav style={{ marginTop: 20 }} center='true'>
              <MDBNavItem
              // active
              >
                <a style={{color:'white'}} href="/issues">
                  <h5>القضايا</h5>
                </a>
              </MDBNavItem>
              <MDBNavItem>
                <a style={{color:'white'}} href="/reports">
                  <h5>التـقاريــر</h5>
                </a>
              </MDBNavItem>
              <MDBNavItem>
                <a style={{color:'white'}} href="/archive">
                  <h5>الأرشيف</h5>
                </a>
              </MDBNavItem>
              <MDBNavItem>
                <MDBDropdown>
                  <MDBDropdownToggle nav>
                    <span className="mr-2">
                      <h5>إضــافــة</h5>
                    </span>
                  </MDBDropdownToggle>
                  <MDBDropdownMenu>
                    <MDBDropdownItem href="/addIssue">إضافة قضية</MDBDropdownItem>
                    <MDBDropdownItem href="/addClient">إضافة عميل</MDBDropdownItem>
                  </MDBDropdownMenu>
                </MDBDropdown>
              </MDBNavItem>
            </MDBNavbarNav>
          </MDBCollapse>
          <MDBNavbarNav right>
            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav>
                  <MDBIcon style={{marginLeft: 50, marginRight: 50 ,fontSize:30 }} icon="user" />
                </MDBDropdownToggle>
                <MDBDropdownMenu className="dropdown-default">
                  <MDBDropdownItem href="#!">تسجيل الخروج</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
           
          </MDBNavbarNav> 
          <MDBNavbarBrand>
              <h2 style={{fontWeight:'bold'}}>مـيــز ا ن</h2>
            </MDBNavbarBrand>
            <MDBNavbarToggler onClick={this.toggleCollapse} />
        </MDBNavbar>
      </Router>
    );
  }
}

export default Header;
