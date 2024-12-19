import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home.jsx';
import AllEquipment from './components/AllEquipment/AllEquipment.jsx';
import AddEquipment from './components/AddEquipment/AddEquipment';
import MyEquipment from './components/MyEquipment/MyEquipment';
import LogIn from './components/LogIn/LogIn';
import Register from './components/Register/Register';
import Root from './components/Root/Root';
import Error from './components/Error/Error';
import UpdateEquipment from './components/UpdateEquipment/UpdateEquipment';
import AuthProvider from './Providers/AuthProvider.jsx';

const router = createBrowserRouter([

  {
    path: '/',
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: ()=>fetch("http://localhost:5000/equipment?limit=6"),
      },
      {
        path: "/all-equipment",
        element: <AllEquipment></AllEquipment>,
        loader: () => fetch('http://localhost:5000/equipment'),
      },
      {
        path: "/add-equipment",
        element: <AddEquipment></AddEquipment>,
      },
      {
        path: "/my-equipment",
        element: <MyEquipment></MyEquipment>,
      },
      {
        // path: "update-equipment",
        path: "/equipment/:id",
        element: <UpdateEquipment></UpdateEquipment>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "login",
        element: <LogIn></LogIn>,
      },
    ]
  }

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>

  </StrictMode>,
)
