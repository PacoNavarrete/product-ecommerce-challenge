import styled from 'styled-components';

export const BrandLogo = styled.img`
  width: 120px;
  height: 20px;

`

export const Avatar = styled.img`
  width: 50px;
  border-radius: 30px; 
  margin-left: 40px;
  &:hover {
    outline: 2px solid ${props => props.theme.colors.primary.orange};
    cursor: pointer;
  }
`;

export const CartIcon = styled.img`
  &:hover {
    filter: brightness(0%);
    cursor: pointer;
  }

`;
