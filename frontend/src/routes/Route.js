import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home";
import AdminPanel from "../layout/AdminPanel";
import AdminHome from "../adminPages/AdminHome";
import Users from "../adminPages/Users";
const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children:[
        {
          path: "/",
          element:<Home />,
        }
      ]
    },
    {
      path:'/admin',
      element:<AdminPanel />,
      children:[
        {
          path:"",
          element:<AdminHome />,
        },
        {path:'users',element:<Users/>}
      ]
    }
  ]);

  export default router;