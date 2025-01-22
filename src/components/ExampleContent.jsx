import styled from 'styled-components';

import Container from './common/containers/Container';
import Form from './common/Form';
import Divider from './common/Divider';
import Heading from './common/Heading';
import Paragraph from './common/Paragraph';
import Article from './articles/Article';

const StyledContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: 2em;
  min-width: 100%;
  min-height: 80%;
  max-height: 100%;

  @media (max-width: 1151px) {
    grid-template-columns: 1fr;
  }
`;
const StyledArticleContainer = styled(Container)`
  min-width: 620px;
`;
const StyledSidebar = styled(Container)`
  min-width: 366px;
`;

function ExampleContent() {
  return (
    <StyledContentWrapper>
      <StyledArticleContainer>
        <Heading type='h2' text='This is a heading.' borderBottom={true} />
        <Article />
      </StyledArticleContainer>

      <StyledSidebar>
        <h3>Another heading.</h3>
        <Divider />
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Paragraph>
        <Divider margin='0 0 1em 0' />

        <Form title='Newsletter' />
        <Divider margin='1em 0' />
        <Paragraph quote={true}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Paragraph>
      </StyledSidebar>
    </StyledContentWrapper>
  );
}

export default ExampleContent;
