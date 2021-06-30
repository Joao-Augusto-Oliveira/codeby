import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import GlobalStyles from './styles/global';
import { CartProvider } from './hooks/useCart';
import { ToastContainer } from 'react-toastify';

const App = (): JSX.Element => {
  return (
    <BrowserRouter>
      <CartProvider>
        <GlobalStyles />
        <Routes />
        <ToastContainer autoClose={3000} />
      </CartProvider>
    </BrowserRouter>
    
  );
};

export default App;