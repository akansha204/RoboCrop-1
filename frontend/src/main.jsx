import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom"; // Changed from react-router
import App from "./layout/App.jsx";
import Home from "./pages/Home.jsx";
import Signup from "./pages/SignUp.jsx";
import SignIn from "./pages/SignIn.jsx";
import SignUpPage from "./components/SignUpPage.jsx";
import TabsNavigation from "./components/TabsNavigation";
import FieldMonitoring from "./pages/FieldMonitoring";
import Dashboard from "./pages/Dashboard";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}> {/* You likely want App as your root layout */}
      <Route index element={<Home />} />
      <Route path="SignUpPage" element={<SignUpPage />} />
      <Route path="Signup" element={<Signup />} />
      <Route path="SignIn" element={<SignIn />} />
      <Route path="Dashboard" element={<Dashboard />} />
      <Route path="TabsNavigation" element={<TabsNavigation />} />
      <Route path="FieldMonitoring" element={<FieldMonitoring />} /> 
    </Route>
  )
);



createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);