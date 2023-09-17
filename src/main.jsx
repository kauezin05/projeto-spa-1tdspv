import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Router/Home.jsx';
import Produtos from './Router/produtos/Produtos.jsx';
import Error from './Router/Error.jsx';
import EditarProdutos from './Router/produtos/EditarProduto.jsx';
import ExcluirProdutos from './Router/produtos/ExcluirProdutos.jsx';
import InserirProdutos from './Router/produtos/InserirProdutos.jsx';

const router = createBrowserRouter([
  {path: "/" , element: <App/>, errorElement: <Error/>,
    children:[
      {path: "/" , element: <Home/>},
      {path: "/produtos" , element: <Produtos/>},
      {path: "/inserir/produtos" , element: <InserirProdutos/>},
      {path: "/editar/produtos/:id" , element: <EditarProdutos/>},
      {path: "/excluir/produtos/:id" , element: <ExcluirProdutos/>},
      
    ]}
])

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <RouterProvider router={router}/>
  ,
)
