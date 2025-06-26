import './App.css'
import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import { ConfigProvider, theme } from 'antd';
import { useAuth } from './context/authSate';

function App() {

  const {themeDark, themeColor  } = useAuth() as any


  return (
    <div className="App h-screen overflow-hidden ">
        <ConfigProvider
    theme={{
      algorithm: themeDark ? theme.darkAlgorithm : theme.defaultAlgorithm,
     
      
      token: {
       
        fontFamily:`'Inter', sans-serif`,
        colorPrimary: themeColor
      },
    }}
  >
           <RouterProvider router={router} />
</ConfigProvider>
        </div>
  )
}

export default App
