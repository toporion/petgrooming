import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home";
import AdminPanel from "../layout/AdminPanel";
import AdminHome from "../adminPages/AdminHome";
import Users from "../adminPages/Users";
import SignUp from "../pages/SignUp";
import Login from "../pages/Login";
import RoleRoute from "../hook/RoleRoute";
import AddProductForm from "../adminPages/AddProductForm";
import Shop from "../pages/Shop";
import ShowDetails from "../pages/ShowDetails";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: '/signup',
        element: <SignUp />
      },
      {
        path: '/login',
        element: <Login />
      },
      {path: '/shop',element:<Shop />},
      {path: '/showDetails/:id',element:<ShowDetails />},
    ]
  },
  {
    path: '/admin',
    element: (
      <RoleRoute allowedRoles={['admin']}>
        <AdminPanel />
      </RoleRoute>
    ),

    children: [
      { path: "", element: <AdminHome /> },
      { path: 'users', element: <Users /> },
      { path: 'add-product', element: <AddProductForm /> },
    ]
  }
]);

export default router;