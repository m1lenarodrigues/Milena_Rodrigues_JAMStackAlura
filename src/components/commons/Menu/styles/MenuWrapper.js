import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const MenuWrapper = styled.nav`
  font-family: 'Rubik', sans-serif;
    display: flex;
    align-items: center;
    justify-content:center;
    flex-wrap: wrap;
    padding-left: 28px;
    padding-right: 28px;
    width: 90%;
`;

MenuWrapper.Central = styled.div`
  width: 100%;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-top: 5px groove #f06292;
  border-bottom: 5px groove #f06292;
  padding: 12px;
`;
