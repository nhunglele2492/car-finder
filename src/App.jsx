import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Layout from "./layouts/Layout";
import NotFoundPage from "./pages/NotFoundPage";
import CarDetailPage from "./pages/CarDetailPage";
import SearchPages from "./pages/SearchPages";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <HomePage /> },
        { path: "car/:id", element: <CarDetailPage /> },
        { path: "/search", element: <SearchPages /> },
        { path: "*", element: <NotFoundPage /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
