import React from "react";
import "./App.css";
const TransactionItem = ({ transaction }) => {
  return (
    <>
      <div className="list-group transactions">
          <img
            className="img-fluid"
            src="https://img.freepik.com/premium-vector/money-transfer-icon-simple-arrow-dollar-web-button-ui-ux-white-background_716564-398.jpg?w=2000"
            alt=""
          />
        <div className="transaction-item list-group-item">

          <h5 id="style1">Name.com Inc.</h5>
          <p id="style1"> {transaction.date} . Automatic Payment</p>
          <p id="date">- {transaction.amount}</p>
        </div>
      </div>
    </>
  );
};

export default TransactionItem;
