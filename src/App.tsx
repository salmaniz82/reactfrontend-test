import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router";
import Todos from "./components/Todos";
import Dashboard from "./layout/Dashboard";
import Properties from "./Properties";
import NotFound from "./NotFound";
import PropertyDetails from "./PropertyDetails";
import { PropertyProvider } from "./context/PropertyContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
    children: [
      { index: true, element: <Properties /> },
      { path: "property/:id", element: <PropertyDetails /> },
      { path: "todos", element: <Todos /> },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default function App() {
  return (
    <PropertyProvider>
      <RouterProvider router={router} />;
    </PropertyProvider>
  );
}
