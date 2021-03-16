import styled, { css } from 'styled-components';
import { breakpointsMedia } from '../../../../theme/utils/breakpointsMedia';
// eslint-disable-next-line import/prefer-default-export
export const MenuWrapper = styled.nav`
    font-family: Amatic SC;
   

    ${breakpointsMedia({
    md: css`
    width: 100%;
    height: 67px;
    left: 0px;
    top: 1025px;
        `,
    lg: css`
          max-width: 1160px; 
        `,
    xl: css`
          max-width: 1222px;
        `,
  })} 
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
