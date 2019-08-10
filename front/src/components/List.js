import React from "react";
import { connect } from "react-redux";

import Table from "react-bootstrap/Table";

function List({ listType, sales, dispatch }) {
  return (
    <div style={{width: '100%'}}>
      <h2>{listType}s</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Customer</th>
            <th>Status</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {sales.map(el => (
            <tr key={el.saleId}>
              <td>{el.saleNumber}</td>
              <td>{el.billingDetails.name}</td>
              <td>{el.status}</td>
              <td>{el.totalExVat}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
function mapStateToProps(state) {
  return {
    sales: state.sales
  };
}

export default connect(mapStateToProps)(List);
