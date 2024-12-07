import { createBrowserRouter } from "react-router-dom";
import { NotFoundPage } from "./pages/NotFoundPage";
import { UserLayout } from "./Layouts/user.layouts";
import { RootLayout } from "./Layouts/RootLayout";
import { LandingPage } from "./pages/LandingPage";
import UserDashboard from "./pages/user/userDashboard";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <LandingPage /> },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
  {
    path: "/user",
    element: <UserLayout />,
    children: [{ index: true, element: <UserDashboard /> }],
  },
]);
