import styled from 'styled-components';
import {
  borderBottom,
  borderPrimary,
  flexAlignCenter,
} from '../../styles/mixins';
import Input from './Input';
import Button from '../buttons/Button';

const FormBorder = styled.form`
  padding: 1px;
  ${borderPrimary}
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: ${({ width }) => width};
  min-width: ${({ minWidth }) => minWidth};
  max-width: ${({ maxWidth }) => maxWidth};
  padding: 1em;
  border: 3px solid ${({ theme }) => theme.lighter};
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

const testForm = [
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
    placeholder: 'Last name',
    required: true,
    ariaLabel: 'First name',
  },
  {
    type: 'email',
    label: 'email',
    name: 'email',
    placeholder: '123@email.com',
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
  title = 'Form',
  formItems = testForm,
  width = '100%',
  minWidth = '',
  maxWidth = '',
}) {
  return (
    <FormBorder>
      <StyledForm width={width} minWidth={minWidth} maxWidth={maxWidth}>
        <StyledHeading>{title}</StyledHeading>
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
    </FormBorder>
  );
}

export default Form;
