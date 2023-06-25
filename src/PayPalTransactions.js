import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css'
import TransactionList from './TransactionList';

const PayPalTransactions = () => {
  // Example transaction data
  const transactions = [
    { id: 1, amount: '$10.00', date: 'jun 22' },
    { id: 2, amount: '$15.00', date: 'jun 21' },
    { id: 3, amount: '$20.00', date: 'jun 20' },
  ];

  return (
    <div className="paypal-transactions">
      <p style={{color:"grey"}}>This week</p>

      <TransactionList transactions={transactions} />
    </div>
  );
};

export default PayPalTransactions;
