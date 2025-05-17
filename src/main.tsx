import {createBrowserRouter,RouterProvider} from "react-router";
import routes from "./routes";
import { createRoot } from 'react-dom/client'
import './index.css'
import { AuthProvider } from "@contexts/AuthContext";

const router = createBrowserRouter(routes);

createRoot(document.getElementById('root')!).render(
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>
)
