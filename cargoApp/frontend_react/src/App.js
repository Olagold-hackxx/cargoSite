import { HelmetProvider } from 'react-helmet-async';
// routes
import RoutePage from './routes';
// theme
import ThemeProvider from './theme';
// components
import { StyledChart } from './components/chart';
import ScrollToTop from './components/scroll-to-top';


export default function App() {

  return (
    <HelmetProvider>
        <ThemeProvider>
          <ScrollToTop />
          <StyledChart />
          <RoutePage />
        </ThemeProvider>
    </HelmetProvider>
  );
}
