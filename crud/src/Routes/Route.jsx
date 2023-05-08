import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from "../Layout/Home";
import EditBooks from "../Pages/EditBooks";
import AddBooks from "../Pages/AddBooks";
import BooksView from "../Component/BooksView";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
        {
          path: "/",
          element: <BooksView></BooksView>,
        },
        {
          path: "/edit-books",
          element: <EditBooks></EditBooks>,
        },
        {
          path: "/addbook",
          element: <AddBooks></AddBooks>,
        },
      ],
  },
]);