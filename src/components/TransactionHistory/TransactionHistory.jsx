import {
  TransactionTable,
  TransactionThead,
  TransactionTr,
  TransactionTh,
  TransactionTbody,
  TransactionTd,
} from './TransactionHistory.styled';
export default function TransactionHistory({ items }) {
  return (
    <TransactionTable>
      <TransactionThead>
        <TransactionTr>
          <TransactionTh>Type</TransactionTh>
          <TransactionTh>Amount</TransactionTh>
          <TransactionTh>Currency</TransactionTh>
        </TransactionTr>
      </TransactionThead>

      <TransactionTbody>
        {items.map(({ id, type, amount, currency }) => (
          <TransactionTr key={id}>
            <TransactionTd>{type}</TransactionTd>
            <TransactionTd>{amount}</TransactionTd>
            <TransactionTd>{currency}</TransactionTd>
          </TransactionTr>
        ))}
      </TransactionTbody>
    </TransactionTable>
  );
}
