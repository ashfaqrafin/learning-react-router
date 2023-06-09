import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs";

export default function RootLayout() {
  return (
    <div className="root_layout">
      <header>
        <nav>
          <h1>react-router</h1>
          <NavLink to="/">Home</NavLink>
          {/* NavLink for active class */}
          <NavLink to="about">about</NavLink>
          <NavLink to="help">help</NavLink>
          <NavLink to="careers">careers</NavLink>
        </nav>
        <Breadcrumbs />
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
