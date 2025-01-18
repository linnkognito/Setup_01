import styled from 'styled-components';
import { capitalizeFirstLetter } from '../../utils/helpers';
import InputBox from './InputBox';

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const FormGroup = styled.div`
  display: grid;
  grid-template-columns: auto 2fr;
  align-items: center;
  justify-content: center;
  gap: 1em;
  margin: 0.5em;
`;

function Input({
  type = 'text',
  name = '',
  placeholder = '',
  readOnly = false,
  disabled = false,
  required = false,
  autoComplete = 'on',
  ariaLabel = undefined,
  label = null,
  ...props
}) {
  const isBox = type === 'checkbox' || type === 'radio';

  return (
    <InputContainer>
      {!isBox && (
        <FormGroup>
          {label && <label>{capitalizeFirstLetter(label)}</label>}

          <input
            type={type}
            name={name}
            placeholder={placeholder}
            readOnly={readOnly}
            disabled={disabled}
            required={required}
            autoComplete={autoComplete}
            aria-label={ariaLabel}
            {...props}
          />
        </FormGroup>
      )}

      {isBox && (
        <InputBox
          type={type}
          name={name}
          placeholder={placeholder}
          readOnly={readOnly}
          disabled={disabled}
          required={required}
          autoComplete={autoComplete}
          aria-label={ariaLabel}
          label={label}
          {...props}
        />
      )}
    </InputContainer>
  );
}

export default Input;
