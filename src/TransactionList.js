import React from 'react';
import TransactionItem from './TransactionItem';

const TransactionList = ({ transactions }) => {
  return (
    <div className="transaction-list">
        {transactions.map((transaction) => (
        <TransactionItem key={transaction.id} transaction={transaction} />
      ))}
    </div>
  );
};

export default TransactionList;
