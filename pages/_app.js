import '../styles/globals.css';
import Layout from '../components/Layout';
import { ThemeProvider } from '../utils/ThemeContext';

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}