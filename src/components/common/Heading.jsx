import React from 'react';
import styled from 'styled-components';
import { borderBottom } from '../../styles/mixins';

const BorderBottom = styled.div`
  width: fit-content;
  padding-bottom: 0.5em;
  ${borderBottom}
`;

function Heading({ type = 'h2', text = '', borderBottom = false, color }) {
  const heading = React.createElement(type, { style: { color } }, text);

  return borderBottom ? <BorderBottom>{heading}</BorderBottom> : heading;
}

export default Heading;
