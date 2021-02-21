import styled, { css } from 'styled-components';
import { breakpointsMedia } from '../../../../theme/utils/breakpointsMedia';
import { TextStyleVariants } from '../../../foundation/Text';


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

    ${breakpointsMedia({
    md: css`
    width: 90%;
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
  })} */
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

  ${breakpointsMedia({
    xs: css`
          ${TextStyleVariants.smallestException}
      `,
    md: css`
        ${TextStyleVariants.paragraph1}
      `,
  })}
`;
