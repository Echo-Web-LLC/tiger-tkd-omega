import React, { ReactNode } from "react";
import Link from "next/link";

interface ButtonProps {
  link: string;
  customStyles: string;
  children: ReactNode;
}

const Button = ({ link, customStyles, children }: ButtonProps) => {
  return (
    <Link
      className={`rounded-md px-5 py-2.5 text-sm border text-center ${customStyles}`}
      href={link}
    >
      {children}
    </Link>
  );
};

export default Button;
