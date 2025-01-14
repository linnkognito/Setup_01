function Button({ children = null, value = '', onClick = null }) {
  return <button onClick={onClick}>{children || value}</button>;
}

export default Button;
