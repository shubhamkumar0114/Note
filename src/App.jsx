import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home";
import Pastes from "./Components/Pastes";
import ViewPaste from "./Components/ViewPaste";
import Navbar from "./Components/Navbar";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Navbar />
        <Home />
      </div>
    ),
  },
  {
    path: "/paste",
    element: (
      <div>
        <Navbar />
        <Pastes />
      </div>
    ),
  },
  {
    path: "/viewpaste/:pasteId",
    element: (
      <div>
        <Navbar />
        <ViewPaste />
      </div>
    ),
  },
]);

function App() {
  return (
    <div className="">
      <div className="">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
