"use client";

import React, { ReactNode, useState } from "react";
import Link from "next/link";
import Button from "../ui/button";
import Image from "next/image";

const Nav = () => {
  const [showNav, setShowNav] = useState(false);

  const toggleNav = () => {
    setShowNav((prev) => !prev);
  };

  return (
    <header className="bg-white shadow mb-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-12">
            <Link href="/">
              <span className="sr-only">Home</span>
              <Image
                src="https://tigers-tkd-omega.s3.amazonaws.com/logo.png"
                alt="logo"
                width={90}
                height={0}
              />
            </Link>
          </div>

          <nav
            className={`fixed bg-black bg-opacity-40 h-screen w-screen top-0 ${
              showNav ? "left-0" : "left-full"
            } transition-all md:transition-none m-0 p-0 z-10 md:block md:static md:h-fit md:w-fit md:bg-transparent`}
          >
            <ul className="flex flex-col items-center justify-center h-full gap-12 text-md md:flex-row">
              <NavItem link="/about" onClick={toggleNav}>
                About
              </NavItem>
              <NavItem link="/schedule" onClick={toggleNav}>
                Schedule
              </NavItem>
              <NavItem link="/pricing" onClick={toggleNav}>
                Pricing
              </NavItem>
            </ul>
            <button
              className={`top-5 right-5 text-white text-4xl ${
                showNav ? "absolute" : "hidden"
              }`}
              onClick={toggleNav}
            >
              X<i className="fa-solid fa-xmark"></i>
            </button>
          </nav>

          <div className="flex items-center gap-4">
            <div className="flex gap-4">
              <Button link="/contact">Contact Us</Button>
            </div>

            <div className="block md:hidden">
              <button
                className="rounded bg-gray-100 p-2 text-gray-600 hover:text-gray-600/75"
                onClick={toggleNav}
              >
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

const NavItem = ({
  link,
  onClick,
  children,
}: {
  link: string;
  onClick: () => void;
  children: ReactNode;
}) => (
  <li>
    <Link
      href={link}
      className="font-medium md:text-gray-900 hover:text-gray-700/75 text-4xl md:text-base uppercase md:normal-case text-white"
      onClick={onClick}
    >
      {children}
    </Link>
  </li>
);

export default Nav;
