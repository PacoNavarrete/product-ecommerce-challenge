import styled from 'styled-components';

export const NavMenuList = styled.ul`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  margin: 0;
  margin-left: 60px;
  padding: 0;
  
  li {
    color: ${(props) => props.theme.colors.neutral.darkGrayBlue};
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
  }
  li:hover {
    border-bottom: 2px solid orange;
    padding-top: 2px;
    cursor: pointer;
    color: ${(props) => props.theme.colors.neutral.black};
  }

`;
