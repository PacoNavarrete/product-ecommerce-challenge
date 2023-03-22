import { ThemeProvider } from 'styled-components';
import ShoppingCart from './shoecommerce/views/ShoppingCart';
import theme from './theme/theme';
import TopNavBar from './ui/TopNavBar';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <TopNavBar />
      <ShoppingCart />
      <h1>App</h1>
    </ThemeProvider>
  );
};

export default App;
