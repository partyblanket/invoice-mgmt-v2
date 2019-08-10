import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'

import "./Sidebar.css";
import Button from "react-bootstrap/Button";

function Sidebar({ showSidebar, dispatch }) {
  return (
    <nav id="sidebar" className={showSidebar?'':'hide'}>
      <Button>
        NEW SALE
      </Button>
      <Accordion defaultActiveKey="0">
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="0">
            Click me!
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body>Hello! I'm the body</Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="1">
            Click me!
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="1">
            <Card.Body>Hello! I'm another body</Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </nav>
  );
}
function mapStateToProps(state) {
  return {
    showSidebar: state.showSidebar
  };
}

export default connect(mapStateToProps)(Sidebar);
