import Link from "next/link";
import React from "react";

function Header() {
  return (
    <header className="flex items-center justify-between p-4 ">
      <div className="flex items-center space-x-5">
        <Link href={"/"}>
          <img
            className="w-44 object-contain cursor-pointer"
            src="https://miro.medium.com/max/8978/1*s986xIGqhfsN8U--09_AdA.png"
            alt="medium-icon"
          />
        </Link>
        <div className="hidden md:inline-flex items-center space-x-5 cursor-pointer">
          <h3>About</h3>
          <h3>Contact</h3>
          <h3 className="text-white bg-green-600 px-4 py-1 rounded-full">
            Follow
          </h3>
        </div>
      </div>
      <div className="flex space-x-5 items-center text-green-600">
        <h3>Sign In</h3>
        <h3 className="border px-4 py-1 border-green-600 rounded-full">
          Get Started
        </h3>
      </div>
    </header>
  );
}

export default Header;
