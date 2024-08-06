import Home from '../page/Home';
import Product from '../page/Product';
import Compare from '../page/compare';
import Manage from '../page/manage';

const routes = [
  { path: "/", element: <Home /> },
  { path: "/product", element: <Product /> },
  { path: "/compare", element: <Compare /> },
  { path: "/manage", element: <Manage /> },
];

export default routes;
