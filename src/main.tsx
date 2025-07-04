import 'antd/dist/reset.css';
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { ConfigProvider, theme } from 'antd';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';


const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
              <QueryClientProvider client={queryClient}>

    

 <App />

  </QueryClientProvider>
   
  </React.StrictMode>,
)


