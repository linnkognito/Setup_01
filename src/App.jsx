import { useSelector } from 'react-redux';

import './fonts/fontAwesome';

import styled, { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './styles/themes';
import { GlobalStyles } from './styles/GlobalStyles';
import './styles/fonts.css';

import Header from './components/layout/Header';
import Main from './components/layout/Main';
import Container from './components/common/containers/Container';
import Form from './components/common/Form';
import Divider from './components/common/Divider';
import Footer from './components/layout/Footer';
import Heading from './components/common/Heading';
import Paragraph from './components/common/Paragraph';
import Article from './components/articles/Article';

const StyledAppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 100vw;
  min-height: 100vh;
`;
const ContentWrapper = styled.div`
  display: flex;
  gap: 2em;
  min-width: 100%;
  min-height: 80%;
  max-height: 100%;
`;

// const testTable = {
//   columns: [
//     { header: 'Exhibition', key: 'name' },
//     { header: 'Museum', key: 'museum' },
//     { header: 'City', key: 'city' },
//     { header: 'Free for members', key: 'memberAccess' },
//   ],
//   rows: [
//     {
//       name: 'Postmodernism',
//       museum: 'MoMA',
//       city: 'New York City',
//       memberAccess: 'Yes',
//     },
//     {
//       name: 'The modernists',
//       museum: 'MoMA',
//       city: 'New York City',
//       memberAccess: 'Yes',
//     },
//     {
//       name: 'The modernists',
//       museum: 'MoMA',
//       city: 'New York City',
//       memberAccess: 'Yes',
//     },
//   ],
// };

function App() {
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <GlobalStyles />

      <StyledAppContainer>
        <Header />

        <Main>
          {/* Example content */}
          <ContentWrapper>
            <Container width='70%' height='80%'>
              <Heading
                type='h2'
                text='This is a heading.'
                borderBottom={true}
              />
              <Article />
            </Container>

            <Container width='30%' height='80%'>
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
            </Container>
          </ContentWrapper>

          {/* End of Example content */}
        </Main>

        <Footer />
      </StyledAppContainer>
    </ThemeProvider>
  );
}
export default App;
