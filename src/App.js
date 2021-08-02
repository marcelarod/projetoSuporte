import VLibras from "./VLibras"
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter } from 'react-router-dom';
import AuthProvider from './contexts/auth';
import Routes from './Routes/index';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <AuthProvider>
        <VLibras/>
      <BrowserRouter>
        <ToastContainer autoClose={3000} />
        <Routes/>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
