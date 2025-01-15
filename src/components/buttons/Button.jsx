function Button({
  children = null,
  value = '',
  type = 'button',
  ariaLabel = '',
  onClick = null,
  isDisabled = false,
  ...props
}) {
  return (
    <button
      type={type}
      aria-label={ariaLabel}
      onClick={onClick}
      disabled={isDisabled}
      {...props}
    >
      {children || value}
    </button>
  );
}

export default Button;
