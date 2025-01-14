function Icon({ icon = '', onClick = null }) {
  return (
    <span className='icon' onClick={onClick}>
      {icon}
    </span>
  );
}

export default Icon;
