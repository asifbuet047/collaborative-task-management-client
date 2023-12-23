import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { getRoutes } from './Routes/routes.jsx'
import AuthenticationContextProvider from './Contexts/AuthenticationContextProvider.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ToastContainer } from 'react-toastify'

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthenticationContextProvider>
        <RouterProvider router={getRoutes}>
          <App></App>
        </RouterProvider>
      </AuthenticationContextProvider>
    </QueryClientProvider>
    <ToastContainer></ToastContainer>
  </React.StrictMode>

)
