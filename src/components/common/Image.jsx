import styled from 'styled-components';
import { borderPrimary } from '../../styles/mixins';

const SyledImage = styled.img`
  width: 100%;
  padding: 2px;
  border: 3px solid ${({ theme }) => theme.lighter};
`;

const Border = styled.div`
  display: flex;
  width: ${({ width }) => width};
  padding: ${({ border }) => (border ? '2px' : 0)};
  ${({ border }) => (border ? borderPrimary : '')};
`;

function Image({ src, alt = '', width = '100%', border = true, ...props }) {
  return (
    <Border border={border} width={width}>
      <SyledImage src={src} alt={alt} {...props} />
    </Border>
  );
}

export default Image;
