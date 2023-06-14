import Home from "./pages/Home";
import About from "./pages/About";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Routes,
  Route,
  NavLink,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./layouts/RootLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="/about" element={<About />} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
