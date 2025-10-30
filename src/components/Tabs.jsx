import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "../styles/Sections.css";

export default function Tabs({ items=[] }) {
  return (
    <>
      <nav className="tabs">
        <div className="container tabs__row">
          {items.map(it => (
            <NavLink
              key={it.path}
              to={it.path}
              className={({isActive}) => "tabs__item" + (isActive ? " is-active" : "")}
              end
            >
              {it.label}
            </NavLink>
          ))}
        </div>
      </nav>
      <Outlet/>
    </>
  );
}
