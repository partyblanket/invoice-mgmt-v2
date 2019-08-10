import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { toggleSidebar } from "../utils/actions";

import './Header.css'

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import FormControl from "react-bootstrap/FormControl";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function Header({ dispatch }) {
  const [searchInput, setSearchInput] = useState("");

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand className='sidebar-link' onClick={() => dispatch(toggleSidebar())}>Sidebar</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link>Home</Nav.Link>
          <Nav.Link>Sales</Nav.Link>
          <Nav.Link>Products</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form>
      </Navbar>
    </>
  );
}
function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps)(Header);
