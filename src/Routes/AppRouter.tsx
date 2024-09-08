import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Contacts from "../Pages/Contacts/Contacts";
import Invoices from "../Pages/invoices/Invoices";
import Home from "../Pages/Home/Home";
import Form from "../Pages/Form/Form";
import Calendar from "../Pages/Calendar/Calendar";
import FAQ from "../Pages/FAQ/FAQ";
import BarChart from "../Pages/BarChart/BarChart";
import PieChart from "../Pages/pieChart/PieChart";
import Team from "../Pages/team/Team";
import LineChart from "../Pages/lineChart/LineChart";
import Geography from "../Pages/geography/Geography";
import Dashboard from "../Pages/Dashboard/Dashboard";


export default function AppRouter() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
      children: [
        {
            index: true,
            element: <Dashboard />,
          },
          {
            path: "contacts",
            element: <Contacts />,
          },
          {
            path: "invoices",
            element: <Invoices />,
          },
          {
            path: "/form",
            element: <Form />,
          },
          {
            path: "/calendar",
            element: <Calendar />,
          },
          {
            path: "/faq",
            element: <FAQ />,
          },
          {
            path: "/bar",
            element: <BarChart />,
          },
          {
            path: "/pie",
            element: <PieChart />,
          },
          {
            path: "/team",
            element: <Team />,
          },
          {
            path: "/line",
            element: <LineChart />,
          },
          {
            path: "/geography",
            element: <Geography />,
          }
        ]}
        ]);

  return (
    <>
       <RouterProvider router={router} />
    </>
  )
}
