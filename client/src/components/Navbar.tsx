import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <Link to="/" className="text-green-600">
        LETSGTOK
      </Link>
    </nav>
  );
};

export default Navbar;
