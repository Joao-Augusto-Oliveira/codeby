import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import GlobalStyles from './styles/global';


const App = (): JSX.Element => {
  return (
    <BrowserRouter>
        <GlobalStyles />
        <Routes />
    </BrowserRouter>
  );
};

export default App;