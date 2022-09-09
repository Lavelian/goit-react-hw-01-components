import styled from '@emotion/styled';

export const TransactionTable = styled.table`
  width: 300px;
  margin-bottom: 20px;
`;
export const TransactionThead = styled.thead`
  background-color: aqua;
`;
export const TransactionTr = styled.tr`
  border-top: 1px solid black;
  :nth-of-type(2n) {
    background-color: gray;
  }
  :last-child {
    border-bottom: 1px solid black;
  }
`;
export const TransactionTh = styled.th`
  :not(:nth-of-type(2)) {
    border-left: 1px solid black;
    border-right: 1px solid black;
  }
`;

export const TransactionTbody = styled.tbody``;
export const TransactionTd = styled.td`
  :not(:nth-of-type(2)) {
    border-left: 1px solid black;
    border-right: 1px solid black;
  }
`;
