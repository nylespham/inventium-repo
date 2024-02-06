import React from "react"
import ReactDOM from "react-dom/client"
import Signin from "./routes/Signin.tsx"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import Inventory from "./routes/Inventory.tsx"
import Pos from "./routes/Pos.tsx"
import Report from "./routes/Report.tsx"
// import Nav from "./components/Nav.tsx"
import Dashboard from "./routes/Dashboard.tsx"
import Revenue from "./routes/Revenue.tsx"
import Import from "./routes/inventory/Import.tsx"
import ReportForm from "./routes/report/ReportForm.tsx"


const router = createBrowserRouter([
  {
    path: "/dashboard",
    element: <Dashboard />
  },
  {
    path: "/signin",
    element: <Signin />
  },
  {
    path: "/inventory",
    element: <Inventory />,
    children: [
      // {
      //   path: "/inventory/imports/new",
      //   element: <Import />
      // },
      {
        path: "/inventory/exports",
        element: <Inventory />
      },
      {
        path: "/inventory/summary",
        element: <Inventory /> 
      }
    ]
  },
  {
    path: "/inventory/imports/new",
    element: <Import heading="New Inventory Import" 
    />
  },
  {
    path: "/pos",
    element: <Pos />
  },
  {
    path: "/revenue",
    element: <Revenue />
  },
  {
    path: "/reports",
    element: <Report />
  }
])


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
