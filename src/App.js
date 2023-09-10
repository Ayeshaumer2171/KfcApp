 import './App.css';
 import 'bootstrap/dist/css/bootstrap.min.css';
 import Menu from './pages/Menu';
 import { ToastContainer } from 'react-toastify';
 import 'react-toastify/dist/ReactToastify.css';
 
     function App() {
   return (
    <>
    <Menu/>
    <ToastContainer position="bottom-right"  />
    </>
      );
}

export default App;
