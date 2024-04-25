import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Another from "../pages/another/Another";
import Edit from "../pages/edit/Edit";
import ErrorPage from "../pages/errorPage/ErrorPage";
import Home from "../pages/home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/another/:id",
        element: <Another />,
        loader: ({ params }) =>
          fetch(
            `https://simple-wishlist-server.vercel.app/wishlists/${params.id}`
          ),
      },
      {
        path: "/edit/:id",
        element: <Edit />,
        loader: ({ params }) =>
          fetch(
            `https://simple-wishlist-server.vercel.app/wishlists/${params.id}`
          ),
      },
    ],
  },
]);
