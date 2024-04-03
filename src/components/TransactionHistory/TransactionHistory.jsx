import {
  Cell,
  Column,
  Header,
  TransactionsTable,
} from './TransactionHistory.styles';

const TransactionHistory = ({ items }) => {
  return (
    <TransactionsTable>
      <Header>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </Header>

      <Column>
        {items.map(({ id, type, amount, currency }) => (
          <tr key={id}>
            <Cell>{type}</Cell>
            <Cell>{amount}</Cell>
            <Cell>{currency}</Cell>
          </tr>
        ))}
      </Column>
    </TransactionsTable>
  );
};

export default TransactionHistory;
