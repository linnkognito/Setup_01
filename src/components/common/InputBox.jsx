import styled from 'styled-components';
import { capitalizeFirstLetter } from '../../utils/helpers';
import { useState } from 'react';

const FormGroupWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const FormGroup = styled.div`
  display: flex;
  gap: 0.5em;
  justify-content: start;
  align-items: center;
  width: 100%;
  max-width: 280px;
  margin: 0.5em 0;
  font-size: 0.9rem;
`;

const BoxInput = styled.input`
  width: fit-content;
`;

const BoxLabel = styled.label`
  width: 100%;
`;

function InputBox({
  type = '',
  name = '',
  placeholder = '',
  readOnly = false,
  disabled = false,
  required = false,
  autoComplete = 'on',
  ariaLabel = undefined,
  label = '',
  ...props
}) {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <FormGroupWrapper>
      <FormGroup>
        <BoxInput
          type={type}
          name={name}
          placeholder={placeholder}
          readOnly={readOnly}
          disabled={disabled}
          required={required}
          autoComplete={autoComplete}
          aria-label={ariaLabel}
          checked={isChecked}
          onChange={() => setIsChecked((checked) => !checked)}
          {...props}
        />
        {label && (
          <BoxLabel checked={isChecked}>
            {capitalizeFirstLetter(label)}
          </BoxLabel>
        )}
      </FormGroup>
    </FormGroupWrapper>
  );
}

export default InputBox;
