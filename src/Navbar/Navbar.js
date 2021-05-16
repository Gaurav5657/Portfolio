import React from "react";
import Logo from "./Logo";
import Menu from "./Menu";

const Navbar = () => {
  return (
    <header>
      <nav>
        <Logo />
        <Menu />
      </nav>
    </header>
  );
};

export default Navbar;
