import Layout from '../layout'
// import Dashboard from '../';
// import Orders from '../pages/orders';
// import Login from '../pages/login';
import { createBrowserRouter } from 'react-router-dom';
import ErrorPage from '../pages/errorPage';
import Dashboard from '../pages/dashboard';
import Login from '../pages/login';
import Shift from '../pages/shift';
import Staff from '../pages/staff';
import Attendence from '../pages/Attendence';

// import ErrorPage from '../pages/errorPage';






const router = createBrowserRouter( [
  {
    path: "login",
    element: <Login />,
},
  {
    path: "/",
    element: <Layout />,

   

    children: [
      {
        path: "dashboard",
        element: <Dashboard/>,
 
      },
     
      {
        path: "shift",
        element: <Shift/>,
 
      },
      {
        path: "staff",
        element: <Staff/>,
 
      },
       {
        path: "Attendence",
        element: <Attendence/>,
 
      },
      {

         path: "*",
        element: <ErrorPage />
      }

    ],
  },
  
])

  export { router }