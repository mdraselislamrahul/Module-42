import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Cafes from "./Components/Cafes";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Cafes></Cafes>,
    loader: () => { return fetch("Blogs.json") }
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)