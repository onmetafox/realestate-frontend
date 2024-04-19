import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from "@material-tailwind/react";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


const theme = {
  drawer:{
    styles: {
      base: {
        drawer: {
          position: "fixed",
          zIndex: "z-[9999]",
          pointerEvents: "pointer-events-auto",
          backgroundColor: "bg-transparent",
          // boxSizing: "box-border",
          width: "w-[100vw]",          
          // boxShadow: "shadow-2xl shadow-blue-gray-900/10",
        },
      }
    }
  
  },
  typography: {
    styles: {
      variants: {
        h1: {
          display: "block",
          fontSmoothing: "antialiased",
          letterSpacing: "tracking-normal",
          fontFamily: "font-trapBold",
          fontSize: "text-[48px]",
          fontWeight: "font-[700]",
          lineHeight: "leading-[43.2px]",
        },
        h2: {
          display: "block",
          fontSmoothing: "antialiased",
          letterSpacing: "tracking-normal",
          fontFamily: "font-trapBlack",
          fontSize: "text-[32px]",
          fontWeight: "font-[700]",
          lineHeight: "leading-[28.8px]",
        },
        h3: {
          display: "block",
          fontSmoothing: "antialiased",
          letterSpacing: "tracking-normal",
          fontFamily: "font-trapBlack",
          fontSize: "text-[24px]",
          fontWeight: "font-[700]", 
          lineHeight: "leading-[28.8px]",
        },
        
        h4: {
          display: "block",
          fontSmoothing: "antialiased",
          letterSpacing: "tracking-normal",
          fontFamily: "font-trapBlack",
          fontSize: "text-[16px]",
          fontWeight: "font-[400]",
          lineHeight: "leading-[19.2px]",
        },
       
        paragraph: {
          display: "block",
          fontSmoothing: "antialiased",
          fontFamily: "font-trap",
          fontSize: "text-[16px]",
          fontWeight: "font-[400]",
          lineHeight: "leading-[19.2px]",
        },
        small: {
          display: "block",
          fontSmoothing: "antialiased",
          fontFamily: "font-trapLight",
          fontSize: "text-[14px]",
          fontWeight: "font-[400]",
          lineHeight: "leading-[16.2px]",
        },
      },
    },
  },
}


root.render(
  <React.StrictMode>
    <ThemeProvider value={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
