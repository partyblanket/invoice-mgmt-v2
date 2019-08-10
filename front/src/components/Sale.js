import React,{useState} from "react";
import { connect } from "react-redux";

import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";
import DropdownButton from "react-bootstrap/DropdownButton";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";

function Sale({ currentSale, dispatch }) {
  const billingFormItems = [
    {
      label: "Company",
      placeholder: "company name",
      id:'companyName'
    },
    {
      label: "Contant",
      placeholder: "contact name",
      id: 'contactName'
    },
    {
      label: "Phone",
      placeholder: "phone Number",
      id: 'phone'
    },
    {
      label: "Address",
      placeholder: "address Line 1",
      id: 'addressLine1'
    },
    {
      label: "",
      placeholder: "address Line 2",
      id: 'addressLine2'
    },
    {
      label: "Postcode",
      placeholder: "ZIP / postcode",
      id: 'postcode'
    },
    {
      label: "City",
      placeholder: "city",
      id:'city'
    }
  ];

  const shippingFormItems = [
    {
      label: "Company",
      placeholder: "company name"
    },
    {
      label: "Contant",
      placeholder: "contact name"
    },
    {
      label: "Phone",
      placeholder: "phone Number"
    },
    {
      label: "Address",
      placeholder: "address Line 1"
    },
    {
      label: "",
      placeholder: "address Line 2"
    },
    {
      label: "Postcode",
      placeholder: "ZIP / postcode"
    },
    {
      label: "City",
      placeholder: "city"
    }
  ];

  const saleDetailsFormItems = [
    {
      label: "Status",
      placeholder: "none",
      options: ["Draft", "Shipped", "Invoiced", "Paid"],
      type: "select"
    },
    {
      label: "Invoice Date",
      placeholder: "none",
      type: "date"
    },
    {
      label: "Shipping Date",
      placeholder: "none",
      type: "date"
    },
    {
      label: "Due Date",
      placeholder: "none",
      type: "date"
    },
    {
      label: "Including Tax",
      type: "checkbox"
    }
  ];

  const [saleDets, setSaleDets] = useState({})

  const handleChange = e => {
    console.log(e);
    console.log(saleDets);
    
    setSaleDets({...saleDets, [e.target.id]: e.target.value})

  }

  return (
    <div style={{ width: "100%" }}>
      <Row>
        <ButtonGroup>
          <h2>{currentSale.saleNumber}</h2>
          <Button>SAVE</Button>
          <DropdownButton
            as={ButtonGroup}
            title="PRINT"
            id="bg-vertical-dropdown-1"
          >
            <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
            <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
          </DropdownButton>
        </ButtonGroup>
      </Row>
      <Row>
        <Col>
          <Form>
            <h3>Billing details:</h3>
            {billingFormItems.map(el => (
              <Form.Group
                as={Row}
                key={"billing" + el.id}              
              >
                <Form.Label column sm="3">
                  {el.label}
                </Form.Label>
                <Col sm="9">
                  <Form.Control
                    type={el.type || "text"}
                    id={'billing' + el.id}
                    value={saleDets['billing' + el.id] || ''}
                    onChange={handleChange}
                    placeholder={el.placeholder}
                  />
                </Col>
              </Form.Group>
            ))}
          </Form>
        </Col>
        <Col>
          <Form>
            <Row>
              <h3>Shipping details:</h3>
              <Form.Group>
                <Form.Check.Input type="checkbox" />
                <Form.Check.Label>same as billing</Form.Check.Label>
              </Form.Group>
            </Row>
            {billingFormItems.map(el => (
              <Form.Group
                as={Row}
                key={"shipping" + el.id}
              >
                <Form.Label column sm="3">
                  {el.label}
                </Form.Label>
                <Col sm="9">
                  <Form.Control
                    type={el.type || "text"}
                    id={'shipping' + el.id}
                    value={saleDets['shipping' + el.id] || ''}
                    onChange={handleChange}
                    placeholder={el.placeholder}
                  />
                </Col>
              </Form.Group>
            ))}
          </Form>
        </Col>
        <Col>
          <Form>
            
            {saleDetailsFormItems.map(el => {
              if (el.type === "select") {
                return (
                  <Form.Group as={Row} key={el.label} controlId={el.label}>
                    <Form.Label column sm="3">
                      {el.label}
                    </Form.Label>
                    <Col sm="9">
                      <Form.Control as="select">
                        {el.options.map(el => (
                          <option key={el}>{el}</option>
                        ))}
                      </Form.Control>
                    </Col>
                  </Form.Group>
                );
              } else {
                return (
                  <Form.Group as={Row} key={el.label} controlId={el.label}>
                    <Form.Label column sm="3">
                      {el.label}
                    </Form.Label>
                    <Col sm="9">
                      <Form.Control
                        type={el.type || "text"}
                        placeholder={el.placeholder}
                      />
                    </Col>
                  </Form.Group>
                );
              }
            })}
          </Form>
        </Col>
      </Row>
      <Row>
        <Col sm="1">Line#</Col>
        <Col sm="1">Amount</Col>
        <Col sm="2">SKU</Col>
        <Col sm="4">Product</Col>
        <Col sm="1">Price</Col>
        <Col sm="1">Total</Col>
      </Row>
      <Form>
      {currentSale.invoiceLines.map((el,index) => (
              <Row>
        
              <Col sm="1">{index}</Col>
              <Col sm="1"><Form.Control type='number'></Form.Control></Col>
              <Col sm="2"><Form.Control type='text'></Form.Control></Col>
              <Col sm="4"><Form.Control type='text'></Form.Control></Col>
              <Col sm="1"><Form.Control type='text'></Form.Control></Col>
              <Col sm="1">$9.00</Col>
      
            </Row>
      ))}
      

      </Form>
    </div>
  );
}
function mapStateToProps(state) {
  return {
    currentSale: state.currentSale
  };
}

export default connect(mapStateToProps)(Sale);
