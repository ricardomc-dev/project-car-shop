import React from 'react'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import AppProvider from './context/AppProvider';
import Routes from './AppRoutes';


function App() {
  return (
    <AppProvider>
      <Routes />
      <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
    </AppProvider>
  );
}

export default App;
