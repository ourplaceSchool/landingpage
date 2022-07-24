import GlobalStyle from './globalStyles';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer'
import Home from './Home';
import QuemSomos from './QuemSomos';
import FaleConosco from './FaleConosco';
import Metodologia from './Metodologia';
import Galeria from './Galeria';

const theme = {
  colors: {
    primary: '#AD4226',
    darkPrimary: '#1B6270',
    white: '#FFFFFF',
    darkHover: 'rgba(27, 98, 112, 0.8)',
    bgColor: '#FEF5D0',
    bgTransparent: 'rgba(254, 245, 208, .88)'
  }
}


function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <NavBar />
          <Home />
          <QuemSomos />
          <Metodologia />
          {/* <Galeria /> */}
          <FaleConosco />
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
