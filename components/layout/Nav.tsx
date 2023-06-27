import React from "react";
import Link from "next/link";
import Button from "../ui/button";

const Nav = () => {
  return (
    <header className="bg-white shadow mb-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-12">
            <Link href="/">
              <span className="sr-only">Home</span>
              <img
                className="h-24"
                src="https://tigers-tkd-omega.s3.amazonaws.com/logo.png"
                alt="logo"
              />
            </Link>
          </div>

          <nav className="hidden md:block">
            <ul className="flex items-center gap-12 text-md">
              <li>
                <Link
                  href="/about"
                  className="font-medium text-gray-900 hover:text-gray-700/75"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/schedule"
                  className="font-medium text-gray-900 hover:text-gray-700/75"
                >
                  Schedule
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="font-medium text-gray-900 hover:text-gray-700/75"
                >
                  Pricing
                </Link>
              </li>
            </ul>
          </nav>

          <div className="flex items-center gap-4">
            <div className="flex gap-4">
              <Button link="/contact">Contact Us</Button>
            </div>

            <div className="block md:hidden">
              <button className="rounded bg-gray-100 p-2 text-gray-600 hover:text-gray-600/75">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Nav;
