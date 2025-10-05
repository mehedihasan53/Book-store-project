import React from "react";
import { createBrowserRouter } from "react-router";
import Root from "../pages/Root/Root";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import BookDetails from "../pages/BookDetails/BookDetails";
import readListed from "../pages/readListed/ReadListed";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        path: "/",
        loader: () => fetch("/data.json"),
        Component: Home,
      },

      {
        path: "/readListed",
        loader: () => fetch("/data.json"),
        Component: readListed,
      },

      {
        path: "/BookDetails/:id",
        loader: () => fetch("/data.json"),
        Component: BookDetails,
      },
    ],
  },
]);
