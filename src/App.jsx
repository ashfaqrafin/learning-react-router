import Home from "./pages/Home";
import About from "./pages/About";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <header>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="about">About</NavLink>
        </nav>
      </header>
      <main>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
