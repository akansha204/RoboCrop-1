import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router";
import App from "./layout/App.jsx";
import Home from "./pages/Home.jsx";
import Signup from "./pages/SignUp.jsx";
import SignIn from "./pages/SignIn.jsx";
import SignUpPage from "./components/SignUpPage.jsx";

import useAuthStore from "./contexts/store/authStore";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Home />} />
      <Route path="SignUp" element={<Signup />} />
      <Route path="login" element={<SignIn />} />
      <Route path="SignUpPage" element={<SignUpPage />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
