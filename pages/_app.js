import '../styles/globals.css';
import Layout from '../components/Layout';
import { ThemeProvider } from '../utils/ThemeContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
// import { Navbar, Footer } from '../components';

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      {/* <Layout> */}
        <Navbar />
          <Component {...pageProps} />
        <Footer />
      {/* </Layout> */}
    </ThemeProvider>
  );
}