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
  return (
    // <header>
    //   <nav>
    //     <h1>React-router</h1>
    //     <NavLink to="/">Home</NavLink>
    //     <NavLink to="about">About</NavLink>
    //   </nav>
    // </header>
    <RouterProvider router={router} />
  );
};

export default App;
