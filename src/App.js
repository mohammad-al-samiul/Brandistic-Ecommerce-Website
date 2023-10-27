import React from 'react';
import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './Routes/Routes';

const App = () => {
  return (
    <div className="max-w-[1440px] mx-auto">
      <Toaster position="top-center" />
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
};

export default App;
