import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "./Home";
import Products from "./Products";
import Categories from "./Categories";
import Custom from "./Custom";
import Blog from "./Blog";
import Login from "./Login";
import Signup from "./Signup";
import CartPage from "./CartPage";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
            path: '/',
            element: <Home />
        },
        {
          path: '/products',
          element: <Products />,
        },
        {
          path: '/categories',
          element: <Categories />
        },
        {
          path: '/custom',
          element: <Custom />
        },
        {
          path: '/blog',
          element: <Blog />
        },
        {
          path: '/cart',
          element: <CartPage />
        },
      ]
    },
    {
      path: '/login',
      element: <Login />
    },
    {
      path: '/signup',
      element: <Signup />
    }
  ]);