import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Text from '../../../foundation/Text';

const InputWrapper = styled.div`
  margin-bottom: 17px;
  font-family:Amatic SC;
  margin: 1rem;
  width: 90%;
`;

const Input = styled(Text)`
  outline: 0;
  font-family:Amatic SC;
  margin: 1rem;
  width: 90%;
  border-style: hidden hidden solid;
  border-bottom-width: 1px;
  border-bottom-color: #f4aec9;
`;


Input.defaultProps = {
  tag: 'input',
  variant: 'paragraph1',
};

export default function TextField({
  placeholder,
  name,
  onChange,
  onBlur,
  value,
  tag,
}) {
  return (
    <InputWrapper>
      <Input
        as={tag}
        placeholder={placeholder}
        name={name}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
      />
    </InputWrapper>
  );
}

TextField.propTypes = {
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};