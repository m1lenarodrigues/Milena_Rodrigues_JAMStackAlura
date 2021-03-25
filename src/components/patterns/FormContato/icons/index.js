/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import { CloseCircle } from '@styled-icons/evaicons-solid';

export const CloseIcon = styled(CloseCircle)`
  width: 20px;
  color: ${({ theme }) => theme.colors.primary.main.color};
  cursor: pointer;
  margin-top: 7px;
  margin-left: 296px;
`;
