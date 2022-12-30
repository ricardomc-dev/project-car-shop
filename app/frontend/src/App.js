import React from 'react'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
// import VehiclesProvider from './context/VehiclesProvider';
import AuthProvider from './context/AuthProvider';
import Routes from './AppRoutes';


function App() {
  return (
    <AuthProvider>
      {/* <VehiclesProvider> */}
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
      {/* </VehiclesProvider> */}
    </AuthProvider>
  );
}

export default App;
