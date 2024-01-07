import React from "react"
import ReactDOM from "react-dom/client"
import Signin from "./routes/Signin.tsx"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import Iventory from "./routes/Inventory.tsx"
import Pos from "./routes/Pos.tsx"
import Report from "./routes/Report.tsx"
import Nav from "./components/Nav.tsx"
import Dashboard from "./routes/Dashboard.tsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Nav />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />
      },
      {
        path: "/inventory",
        element: <Iventory />
      },
      {
        path: "/pos",
        element: <Pos />
      },
      {
        path: "/report",
        element: <Report />
      }
    ]
  },
  {
    path: "/signin",
    element: <Signin />
  }
  
])


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
