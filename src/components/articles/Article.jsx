import styled from 'styled-components';
import Image from '../common/Image';
import Heading from '../common/Heading';
import Divider from '../common/Divider';
import Paragraph from '../common/Paragraph';
import Link from '../common/Link';
import ButtonText from '../buttons/ButtonText';

const ArticleWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: flex-start;
  gap: 3em;

  @media (max-width: 1243px) {
    grid-template-columns: 1fr;
  }
`;
const TextContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1em;
  width: 100%;
  max-width: 100%;

  @media (max-width: 1243px) {
    max-width: 100%;
  }
`;
const LinkContainer = styled.div`
  display: flex;
  justify-content: end;
  margin: 2em;
`;

function Article() {
  return (
    <ArticleWrapper>
      <Image
        src='../public/img/PXL_20230801_182854540.jpg'
        width='100%'
        style={{ maxWidth: '100%' }}
      />
      <TextContent>
        <Heading type='h3' text='Article.' />
        <Divider />
        <Paragraph>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum.
        </Paragraph>
        <Paragraph quote={true}>
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
          fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem
          sequi nesciunt.
        </Paragraph>
        <Paragraph>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt.
        </Paragraph>

        <LinkContainer>
          <Link>
            <ButtonText>Learn more &rarr;</ButtonText>
          </Link>
        </LinkContainer>
      </TextContent>
    </ArticleWrapper>
  );
}

export default Article;
