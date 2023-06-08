import Home from "./pages/Home";
import About from "./pages/About";
import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <header>
        <nav>
          <h1>react-router</h1>
          <NavLink to="/">Home</NavLink>
          {/* NavLink for active class */}
          <NavLink to="about">about</NavLink>
        </nav>
      </header>
      <main>
        <Routes>
          {/* (path="/")=index */}
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
