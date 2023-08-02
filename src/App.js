import GlobalStyle from './globalStyles';
import { ThemeProvider } from 'styled-components';
import {ScrollToTop} from './components/ScrollToTop'
import {WhatsappBtn} from './components/WhatsappBtn'
import Navigation from './components/Navigation';
import Footer from './components/Footer'
import Home from './Home';
import QuemSomos from './QuemSomos';
import FaleConosco from './FaleConosco';
import Metodologia from './Metodologia';
import Galeria from './Galeria';


const theme = {
  colors: {
    primary: '#AD4226',
    primaryHover: 'rgba(173, 66, 38, .8)',
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
        <Navigation />
          <Home />
          <QuemSomos />
          <Metodologia />
          <Galeria />
          <FaleConosco />
        <ScrollToTop />
        <WhatsappBtn />
        <Footer />
    </ThemeProvider>
  );
}

export default App;