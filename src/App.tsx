import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { Alert, Button, Avatar } from "@material-tailwind/react";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { router } from './routes';
import Api from './services/api';



function App() {


  return (
    <div className=''>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
