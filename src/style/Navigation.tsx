import styled from 'styled-components';

export const NavMenuList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  margin: 0;
  margin-left: 60px;
  padding: 0;
  
  li {
    color: #444444;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  li:hover {
    border-bottom: 2px solid orange;
    padding-top: 2px;
    cursor: pointer;
  }

`;
