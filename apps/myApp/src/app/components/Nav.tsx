import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="flex align-middle gap-4 p-4 h-16 underline bg-gray-800">
      <Link className="underline" to="/">
        Home
      </Link>
      <Link className="underline" to="/Users">
        Users
      </Link>
    </div>
  );
};

export default Nav;
