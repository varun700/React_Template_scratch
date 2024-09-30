import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
// import Hello from "./Hello";
import Layout from "./layout";
import Hello from "./Hello";
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Layout />
      </div>
    ),
    children: [
      {
        path: "/",
        element: <Hello />,
      },
    ],
  },
]);
function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
