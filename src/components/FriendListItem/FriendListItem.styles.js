import styled from 'styled-components';

export const Item = styled.li`
  width: 240px;
  padding-left: 20px;
  display: flex;
  align-items: center;
  gap: 20px;
  background-color: #ddfff085;
  border-radius: 5px;
  box-shadow: rgb(204, 219, 232) 3px 3px 6px 0px inset,
    rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;
`;

export const Status = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${({ $status }) => ($status ? '#77d942' : '#cf5e54')};
`;

export const Avatar = styled.img``;

export const Name = styled.p`
  font-size: 24px;
  font-weight: 500;
`;
