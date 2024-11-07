import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root.jsx';
import Home from './components/Home.jsx';
import Register from './components/Register.jsx';
import Login from './components/Login.jsx';
import UserProviders from './Providers/UserProviders.jsx';
import Orders from './components/Orders.jsx';
import PrivateRoute from './routes/PrivateRoute.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/orders',
        element:<PrivateRoute><Orders></Orders></PrivateRoute>
      }
     
      
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserProviders>
      <RouterProvider router={router} />
    </UserProviders>
  </StrictMode>,
)
