import styled, { css } from 'styled-components';
import { breakpointsMedia } from '../../../../theme/utils/breakpointsMedia';
import { typographyVariants } from '../../../../theme/utils/typographyVariants';

const FormWrapper = styled.form`
  flex-direction: column;
  font-family:Amatic SC;
  min-width: 280px;
  background-color: #ffffffE6;
  border: 2px groove #f06292;
  box-shadow: 1px 1px 8px 1px black;

    ${breakpointsMedia({
      md: css`
        h2 {
          ${typographyVariants.title}
        }
        label {
          ${typographyVariants.title}
        }
      `,
    })}
`;

export default FormWrapper;