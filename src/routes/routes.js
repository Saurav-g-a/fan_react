import Home from '../page/Home';
import Product from '../page/Product';
import Compare from '../page/compare';
import Manage from '../page/manage';
import Account from '../page/account';

const routes = [
  { path: "/", element: <Home /> },
  { path: "/product", element: <Product /> },
  { path: "/compare", element: <Compare /> },
  { path: "/manage", element: <Manage /> },
  { path: "/account", element: <Account /> },
];

export default routes;
