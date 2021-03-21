import styled, { css } from 'styled-components';
import { CloseCircle, Email } from '@styled-icons/evaicons-solid';

export const CloseIcon = styled(CloseCircle)`
  width: 20px;
  color: ${({ theme }) => theme.colors.primary.main.color};
  cursor: pointer;
  margin-top: 7px;
  margin-left: 296px;
`;

