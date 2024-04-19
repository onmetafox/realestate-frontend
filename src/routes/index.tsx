import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import { HomePage } from "../pages/Home";
import TermsPage from "../pages/Terms";



  export const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/terms-condition",
      element: <TermsPage />,
    },
  ]);


  