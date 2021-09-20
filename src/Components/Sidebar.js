import React from "react";
import { BiAddToQueue } from "react-icons/bi";
import { AiFillHome } from "react-icons/ai";
import { FaBook } from "react-icons/fa";
import { Link } from "react-router-dom";

function Sidebar() {
  function SidebarItem(props) {
    return (
      <li className="nav-item">
        <Link to={props.link} className="nav-link">
          <props.icon />
          <span className="link-text">{props.title}</span>
        </Link>
      </li>
    );
  }
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <script></script>
          <Link className="logo" to={"/"}>
            <img src="image/dao-logo.svg" alt="/" />
          </Link>
        </li>
        <li className="nav-item" style={{ pointerEvents: "none" }}>
          <div className="nav-link"></div>
        </li>
        <SidebarItem icon={AiFillHome} title={"Home"} link={"/"} />
        <SidebarItem icon={BiAddToQueue} title={"Add"} link={"/add"} />
        <SidebarItem icon={FaBook} title={"Learn"} link={"/learn"} />
      </ul>
    </nav>
  );
}

export default Sidebar;


