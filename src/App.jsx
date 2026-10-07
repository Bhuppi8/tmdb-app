import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Favorite from "./components/Favorite";
import Contact from "./components/Contact";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/favorite",
      element: <Favorite />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
