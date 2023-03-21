import styled from 'styled-components';

export const CartBadge = styled.div`
  width: auto;
  height: 10px;
  display: flex;
  justify-content; center;
  align-items: center;
  position: absolute;
  top: -5px;
  right: -5px;
  padding: 6px 6px;
  border-radius: 6px;
  background-color: ${props => props.theme.colors.primary.orange};
  font-size: 10px;
  font-weight: 900;
  color: white;
`;

export const NavHorizontalLine = styled.hr`
  margin: 0;
  padding: 0;
  width: 80%;
  margin: 0 auto;
  border-top: none;
  border: 1px solid ${props => props.theme.colors.neutral.grayBlue};

`
