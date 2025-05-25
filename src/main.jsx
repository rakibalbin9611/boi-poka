import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/Root/Root";
import ErrorPage from "./ErrorPage";
import Home from "./Home/Home";
import BookDetail from "./components/BookDetail/BookDetail";
import ListedBooks from "./components/ListedBooks/ListedBooks";

// load all books data.
const booksLoader = async () => {
  try {
    const res = await fetch("/booksData.json");
    if (!res.ok) {
      throw new Error("Failed to load books data");
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error loading books data:", error);
    throw error;
  }
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/book/:bookId",
        element: <BookDetail></BookDetail>,
        loader: booksLoader,
      },
      {
        path: "/listedBooks",
        element: <ListedBooks></ListedBooks>,
        loader: booksLoader,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
