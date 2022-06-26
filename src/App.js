import GlobalStyle from './globalStyles';
import { ThemeProvider } from 'styled-components';
import NavBar from './components/NavBar';
// import Home from './Home';
// import QuemSomos from './QuemSomos';
import FaleConosco from './FaleConosco';
import Footer from './components/Footer'

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
      <FaleConosco />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
