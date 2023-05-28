import React from 'react';
import PropTypes from 'prop-types';

import {
  TransactionHistoryTable,
  TableHead,
  TableRow,
  TableHeadr,
  TableBody,
} from './TransactionHistory.styled';

import AllTransaction from 'components/AllTransaction/AllTransaction';

const TransactionHistory = props => {
  const { item } = props;
  return (
    <TransactionHistoryTable>
      <TableHead>
        <TableRow>
          <TableHeadr>Type</TableHeadr>
          <TableHeadr>Amount</TableHeadr>
          <TableHeadr>Currency</TableHeadr>
        </TableRow>
      </TableHead>
      <TableBody>
        {item.map(({ id, type, amount, currency }) => {
          return (
            <AllTransaction
              key={id}
              type={type}
              amount={amount}
              currency={currency}
            />
          );
        })}
      </TableBody>
    </TransactionHistoryTable>
  );
};

TransactionHistory.propTypes = {
  item: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default TransactionHistory;
