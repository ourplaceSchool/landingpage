import GlobalStyle from './globalStyles';
import { ThemeProvider } from 'styled-components';
import NavBar from './components/navBar';
import Home from './components/home';

const theme = {
  colors: {
    primary: '#65B7AC',
    darkPrimary: '#1B6270',
    white: '#FFFFFF',
    darkHover: 'rgba(27, 98, 112, 0.8)'
  }
}


function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <NavBar />
      <Home />
    </ThemeProvider>
  );
}

export default App;
