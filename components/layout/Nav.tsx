import React from "react";
import Link from "next/link";
import Button from "../ui/button";

function Nav() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="md:flex md:items-center md:gap-12">
            <Link href="/">
              <span className="sr-only">Home</span>
              <img
                className="h-24"
                src="https://tigers-tkd-omega.s3.amazonaws.com/logo.png"
                alt="logo"
              />
            </Link>
          </div>

          <div className="hidden md:block">
            <nav aria-label="Global">
              <ul className="flex items-center gap-24 text-md">
                <li>
                  <Link
                    className="font-medium text-gray-900 transition hover:text-gray-700/75"
                    href="/"
                  >
                    Home
                  </Link>
                </li>

                <li>
                  <Link
                    className="font-medium text-gray-900 transition hover:text-gray-700/75"
                    href="/about"
                  >
                    About
                  </Link>
                </li>

                <li>
                  <Link
                    className="font-medium text-gray-900 transition hover:text-gray-700/75"
                    href="/schedule"
                  >
                    Schedule
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <div className="sm:flex sm:gap-4">
              <Button link={"/contact"}>Contact Us</Button>
            </div>

            <div className="block md:hidden">
              <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
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
    </div>
  );
}

export default Nav;
