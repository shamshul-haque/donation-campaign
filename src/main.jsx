import React from "react";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Donation from "./components/donation/Donation";
import DonationDetails from "./components/donation/DonationDetails";
import ErrorPage from "./components/errorPage/ErrorPage";
import Home from "./components/home/Home";
import Root from "./components/root/Root";
import Statistics from "./components/statistics/Statistics";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/donation",
        element: <Donation />,
        loader: () => fetch("/donationData.json"),
      },
      {
        path: "/statistics",
        element: <Statistics />,
        loader: () => fetch("/donationData.json"),
      },
      {
        path: "/donationDetails/:id",
        element: <DonationDetails />,
        loader: () => fetch("/donationData.json"),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  </React.StrictMode>
);
