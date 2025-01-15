import styled from 'styled-components';

const MaterialIcon = styled.span`
  font-family: 'Material Symbols Sharp';
  font-variation-settings:
    'FILL' 0,
    'wght' 100,
    'GRAD' 0,
    'opsz' 24;
`;

function Icon({ icon = '', role = 'img', ariaLabel = `${icon} icon` }) {
  return (
    <MaterialIcon role={role} aria-label={ariaLabel}>
      {icon}
    </MaterialIcon>
  );
}

export default Icon;
