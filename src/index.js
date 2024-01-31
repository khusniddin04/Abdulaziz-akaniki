import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ErrorPage from './Pajes/ErrorPage';
import HomePaje from './Pajes/HomePaje';
import AboutPage from './Pajes/AboutPage';
import CardPaje from './Pajes/CardPaje';
import PdpPaje from './Pajes/PdpPaje';
const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    errorElement:<ErrorPage/>,
    children: [
      {
        path:"/",
        element:<HomePaje/>
      },
      {
        path:"/about",
        element:<AboutPage/>
      },
      {
        path:"/card",
        element:<CardPaje/>
      },
      {
        path:"/pdp",
        element:<PdpPaje/>
      },
    ]
  }
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={appRouter}/>
  </React.StrictMode>
);


