import styled from 'styled-components';
import { flexAlignCenter } from '../../styles/mixins';

const InputContainer = styled.div`
  ${flexAlignCenter}
  gap: 0.8em;
`;

function Input({
  type = 'text',
  name = '',
  value = null,
  placeholder = '',
  readOnly = false,
  disabled = false,
  required = false,
  autoComplete = 'on',
  ariaLabel = undefined,
  label = null,
  ...props
}) {
  return (
    <InputContainer>
      {label && <label>{label}</label>}
      <input
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        readOnly={readOnly}
        disabled={disabled}
        required={required}
        autoComplete={autoComplete}
        aria-label={ariaLabel}
        {...props}
      />
    </InputContainer>
  );
}

export default Input;
