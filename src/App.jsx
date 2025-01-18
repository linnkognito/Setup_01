import styled, { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './styles/themes';
import { GlobalStyles } from './styles/GlobalStyles';
import './styles/fonts.css';

import Container from './components/common/containers/Container';
import Header from './components/layout/Header';
import { useSelector } from 'react-redux';
import Main from './components/layout/Main';
import Form from './components/common/Form';
import Divider from './components/common/Divider';
import Table from './components/common/Table';

const StyledWrapper = styled.div`
  display: flex;
  gap: 2em;
`;

const testTable = {
  columns: [
    { header: 'Exhibition', key: 'name' },
    { header: 'Museum', key: 'museum' },
    { header: 'City', key: 'city' },
    { header: 'Free for members', key: 'memberAccess' },
  ],
  rows: [
    {
      name: 'Postmodernism',
      museum: 'MoMA',
      city: 'New York City',
      memberAccess: 'Yes',
    },
    {
      name: 'The modernists',
      museum: 'MoMA',
      city: 'New York City',
      memberAccess: 'Yes',
    },
    {
      name: 'The modernists',
      museum: 'MoMA',
      city: 'New York City',
      memberAccess: 'Yes',
    },
  ],
};

function App() {
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <GlobalStyles />
      <Header />
      <Main>
        <StyledWrapper>
          <Container width='70%'>
            <Table items={testTable} />
          </Container>

          <Container width='30%'>
            <h2>Another container</h2>
            <Divider />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <Form />
          </Container>
        </StyledWrapper>
      </Main>
    </ThemeProvider>
  );
}
export default App;
