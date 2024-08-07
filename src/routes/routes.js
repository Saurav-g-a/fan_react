import Home from '../page/Home';
import Product from '../page/Product';
import Compare from '../page/compare';
import Manage from '../page/manage';
import Account from '../page/account';
import Login from '../page/auth/login';
import Register from '../page/auth/register';
import FanLogin from '../page/auth/fanLogin';

const routes = [
  { path: "/", element: <Home /> },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  { path: "/fanLogin", element: <FanLogin /> },
  { path: "/product", element: <Product /> },
  { path: "/compare", element: <Compare /> },
  { path: "/manage", element: <Manage /> },
  { path: "/account", element: <Account /> },
];

export default routes;
