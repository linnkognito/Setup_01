import styled from 'styled-components';
import {
  borderBottom,
  borderPrimary,
  flexAlignCenter,
} from '../../styles/mixins';
import Input from './Input';
import Button from '../buttons/Button';

const FormWrapper = styled.div`
  padding: 1em;
  width: 100%;
`;
const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: ${({ width }) => width};
  min-width: ${({ minWidth }) => minWidth || '50%'};
  max-width: ${({ maxWidth }) => maxWidth || '80%'};
  padding: 1em;
  ${borderPrimary}
`;

const StyledButtonWrapper = styled.div`
  ${flexAlignCenter}
  justify-content: end;
  gap: 0.7em;
  margin: 1em;
`;
const StyledHeading = styled.h2`
  padding-bottom: 0.7em;
  margin-bottom: 0.7em;
  ${borderBottom}
`;

const form = [
  {
    type: 'text',
    label: 'first name',
    name: 'name',
    placeholder: 'First name',
    required: true,
    ariaLabel: 'First name',
  },
  {
    type: 'text',
    label: 'last name',
    name: 'surname',
    placeholder: 'First name',
    required: true,
    ariaLabel: 'First name',
  },
  {
    type: 'text',
    label: 'last name',
    name: 'surname',
    placeholder: 'First name',
    required: true,
    ariaLabel: 'First name',
  },
  {
    type: 'checkbox',
    label: 'I approve of the Terms & Conditions',
    name: 'surname',
    placeholder: 'First name',
    required: true,
    ariaLabel: 'First name',
  },
];

function Form({
  formItems = form,
  width = 'fit-content',
  minWidth = '',
  maxWidth = '',
}) {
  return (
    <FormWrapper>
      <StyledForm width={width} minWidth={minWidth} maxWidth={maxWidth}>
        <StyledHeading>Submit form</StyledHeading>
        {formItems.length > 0 &&
          formItems.map((item, i) => (
            <Input
              key={i}
              type={item.type}
              label={item.label}
              name={item.name}
              placeholder={item.placeholder}
              required={item.required}
              ariaLabel={item.ariaLabel}
            />
          ))}

        <StyledButtonWrapper>
          <Button type='cancel'>Cancel</Button>
          <Button type='submit'>Submit</Button>
        </StyledButtonWrapper>
      </StyledForm>
    </FormWrapper>
  );
}

export default Form;
