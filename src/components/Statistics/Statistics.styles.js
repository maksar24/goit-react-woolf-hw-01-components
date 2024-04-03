import styled from 'styled-components';

const ColorStyle = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return 'rgb(' + r + ',' + g + ',' + b + ')';
};

export const StatisticsSection = styled.section`
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;
  background-color: #cee3f5;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;

export const Title = styled.h2`
  font-size: 28px;
  color: #378924;
`;

export const List = styled.ul`
  list-style: none;
  color: #fff;
  padding: 0;
  margin: 0px;
  width: 400px;
  display: flex;
  justify-content: space-around;
`;

export const Item = styled.li`
  width: 100%;
  padding: 20px 0 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  background-color: ${ColorStyle};
`;

export const Label = styled.span`
  font-size: 18px;
`;

export const Percentage = styled.span`
  font-size: 20px;
  font-weight: 700;
`;
