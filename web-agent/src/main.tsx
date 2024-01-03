import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.tsx"
import Signin from "./routes/Signin.tsx"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
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
