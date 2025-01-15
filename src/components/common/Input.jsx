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
  ...props
}) {
  return (
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
  );
}

export default Input;
