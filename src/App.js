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
      <Router>
        {/* <NavBar /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="sobre" element={<QuemSomos />} />
          <Route path="metodologia" element={<Metodologia />} />
          <Route path="galeria" element={<Galeria />} />
          <Route path="contato" element={<FaleConosco />} />
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
