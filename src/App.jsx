import styled, { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './styles/themes';
import { GlobalStyles } from './styles/GlobalStyles';
import './styles/fonts.css';

import Container from './components/common/containers/Container';
import Card from './components/common/containers/Card';
import Header from './components/layout/Header';
import { useSelector } from 'react-redux';
import Main from './components/layout/Main';
import Input from './components/common/Input';
import Button from './components/buttons/Button';
import Popup from './components/common/Popup';

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
        <Popup background=''>
          Popup text content.Popup text content.Popup text content. Popup text
          content. Popup text content. Popup text content. Popup text content.
          Popup text content. Popup text content. Popup text content. Popup text
          content.
        </Popup>
        <StyledWrapper>
          <Container width='70%'>
            <h2>Lorem ipsum</h2>
            Lorem ipsum dolor sit amet.
            <Input placeholder='Search...' />
            <Button value='Button' />
            <Card>A card to test and see what is going on.</Card>
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
