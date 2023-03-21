import { ThemeProvider } from 'styled-components';
import theme from './theme/theme';
import TopNavBar from './ui/TopNavBar';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <TopNavBar />
      <h1>App</h1>
    </ThemeProvider>
  );
};

export default App;
