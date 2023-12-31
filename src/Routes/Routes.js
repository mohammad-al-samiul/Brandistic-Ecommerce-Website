import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layouts/Main';
import Carts from '../Pages/Carts/Carts';
import Contact from '../Pages/Contact/Contact';
import Home from '../Pages/Home/Home/Home';
import FilterProducts from '../Pages/Products/FilterProducts/FilterProducts';
import ProductDetails from '../Pages/Products/ProductDetails/ProductDetails';
import Products from '../Pages/Products/Products';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/home',
        element: <Home />
      },
      {
        path: '/products',
        element: <Products />
      },
      {
        path: '/product/:id',
        element: <ProductDetails />,
        loader: ({ params }) => fetch(`https://fakestoreapi.com/products/${params.id}`)
      },
      {
        path: '/product/category/:name',
        element: <FilterProducts />
      },

      {
        path: '/contact',
        element: <Contact />
      },
      {
        path: '/carts',
        element: <Carts />
      }
    ]
  }
]);

export default router;
