import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="sticky top-0 px-4 py-2 bg-orange-600 text-white flex items-center justify-between text-xl font-semibold">
      <Link href={"/"}>Time Table Management</Link>
      <div className="flex">
        <Link href={"/profile"}>Profile</Link>
        <div className="ml-4">
          <Link href={"/auth"}>Login</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
