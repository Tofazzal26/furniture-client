import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import Router from "./pages/Router/Router";
import AuthProvider, {
  AuthContext,
} from "./Components/AuthProvider/AuthProvider";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={Router}></RouterProvider>
      <Toaster></Toaster>
    </AuthProvider>
  </StrictMode>
);
