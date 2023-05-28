import React from 'react';
import PropTypes from 'prop-types';

import { TableRow, TableData } from './AllTransaction.styled';

const AllTransaction = props => {
  const { type, amount, currency } = props;
  return (
    <>
      <TableRow>
        <TableData>{type}</TableData>
        <TableData>{amount}</TableData>
        <TableData>{currency}</TableData>
      </TableRow>
    </>
  );
};

AllTransaction.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};

export default AllTransaction;
