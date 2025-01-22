import { useSelector } from 'react-redux';

import styled, { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './styles/themes';
import { GlobalStyles } from './styles/GlobalStyles';
import './fonts/fontAwesome';
import './styles/fonts.css';

import Header from './components/layout/Header';
import Main from './components/layout/Main';
import Footer from './components/layout/Footer';
import ExampleContent from './components/ExampleContent';

const StyledAppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 100vw;
  min-height: 100vh;
`;

function App() {
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <GlobalStyles />

      <StyledAppContainer>
        <Header />

        <Main>
          <ExampleContent />
        </Main>

        <Footer />
      </StyledAppContainer>
    </ThemeProvider>
  );
}
export default App;
