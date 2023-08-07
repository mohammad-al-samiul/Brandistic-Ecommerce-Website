import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layouts/Main';
import About from '../Pages/About/About';
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
        path: '/about',
        element: <About />
      },
      {
        path: '/contact',
        element: <Contact />
      }
    ]
  }
]);

export default router;
