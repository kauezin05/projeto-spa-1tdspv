import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Router/Home.jsx';
import Produtos from './Router/produtos/Produtos.jsx';
import Error from './Router/Error.jsx';
import EditarProdutos from './Router/produtos/EditarProduto.jsx';

const router = createBrowserRouter([
  {path: "/" , element: <App/>, errorElement: <Error/>,
    children:[
      {path: "/" , element: <Home/>},
      {path: "/produtos" , element: <Produtos/>},
      {path: "/produtos/editar/:id" , element: <EditarProdutos/>},
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)

