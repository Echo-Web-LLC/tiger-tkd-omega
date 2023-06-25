import React, { ReactNode } from "react";
import Link from "next/link";

interface ButtonProps {
  link: string;
  children: ReactNode;
}

const Button = ({ link, children }: ButtonProps) => {
  return (
    <Link
      className="rounded-md bg-gray-50 px-5 py-2.5 text-sm font-medium text-gray-900 border-2 border-gray-900 shadow"
      href={link}
    >
      {children}
    </Link>
  );
};

export default Button;
