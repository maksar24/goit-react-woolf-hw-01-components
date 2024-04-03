import styled from 'styled-components';

export const TransactionsTable = styled.table`
  width: 800px;
  border-collapse: collapse;
  text-align: center;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 15px 25px,
    rgba(0, 0, 0, 0.05) 0px 5px 10px;
`;

export const Header = styled.thead`
  height: 40px;
  color: #446393;
  background-color: #d8fbfb;
  font-size: 22px;
`;

export const Column = styled.tbody`
  font-size: 18px;
  font-weight: 500;
  color: #4c2f58;
  background-color: #b2edc6b8;
`;

export const Cell = styled.td`
  height: 30px;
  border: 2px solid #d8fbfb;
`;
