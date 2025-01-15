import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './styles/themes';
import { GlobalStyles } from './styles/GlobalStyles';
import './styles/fonts.css';

import Container from './components/common/containers/Container';
import Header from './components/layout/Header';
import { useSelector } from 'react-redux';
import Main from './components/layout/Main';
import Input from './components/common/Input';

function App() {
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <GlobalStyles />
      <Header />
      <Main>
        <Container>
          <Input placeholder='Search...' />
        </Container>
      </Main>
    </ThemeProvider>
  );
}

export default App;
