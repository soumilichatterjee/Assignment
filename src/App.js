import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/Error";
import TextScreenPage from "./pages/TextScreen";
import HomeScreenPage from "./pages/HomeScreen";
import ButtonScreenPage from "./pages/ButtonScreen";
import RootLayout from "./pages/Root";
import PhotoScreenPage from "./pages/PhotoScreen";

import AuthScreenPage from "./pages/AuthScreen";

import CalculatorScreenPage from "./pages/CalculatorScreen";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomeScreenPage /> },
      { path: "/authscreen", element: <AuthScreenPage /> },

    {path:"/buttonscreen", element:<ButtonScreenPage/>},

      { path: "/photoscreen", element: <PhotoScreenPage /> },
      { path: "/textscreen", element: <TextScreenPage /> },
      { path: "/calculatorscreen", element: <CalculatorScreenPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
