import styled, { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './styles/themes';
import { GlobalStyles } from './styles/GlobalStyles';
import './styles/fonts.css';

import Container from './components/common/containers/Container';
import Card from './components/common/containers/Card';
import Header from './components/layout/Header';
import { useSelector } from 'react-redux';
import Main from './components/layout/Main';
import Form from './components/common/Form';

const StyledWrapper = styled.div`
  display: flex;
  gap: 2em;
`;

function App() {
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <GlobalStyles />
      <Header />
      <Main>
        <StyledWrapper>
          <Container width='70%'>
            <Form />
          </Container>

          <Container width='30%'>
            <h3>Another container</h3>
            <Card>
              Some content for this little card. And some more just to see what
              happens if the text is longer.
            </Card>
          </Container>
        </StyledWrapper>
      </Main>
    </ThemeProvider>
  );
}
export default App;
