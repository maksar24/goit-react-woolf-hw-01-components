import styled from 'styled-components';

export const Card = styled.div`
  text-align: center;
  width: 400px;
  height: auto;
  background-color: #b6e3c2;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

export const List = styled.ul`
  list-style: none;
  padding: 40px 0 40px 0;
  margin: 0px;
  display: flex;
  justify-content: space-around;
  background-color: #4f936180;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  border: 2px;
`;

export const Description = styled.div``;

export const Avatar = styled.img`
  margin-top: 30px;
  width: 300px;
  border-radius: 50%;
  background-color: #fff;
`;

export const Name = styled.p`
  font-size: 24px;
  font-weight: 700;
`;

export const Info = styled.p`
  font-size: 18px;
  color: #8f8d4b;
`;

export const Label = styled.span`
  font-size: 18px;
`;

export const Quantity = styled.span`
  font-size: 20px;
  font-weight: 700;
`;
