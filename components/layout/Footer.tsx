import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="mt-10">
      <div className="mx-auto max-w-screen-2xl p-4 sm:p-6 lg:p-8">
        <div className="flex flex-col md:flex-row md:justify-between">
          <div className="mb-6 md:mb-0">
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
          </div>
          <div className="mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="hover:text-gray-300">
                  <Image
                    src="/facebook-icon.png"
                    alt="kickingMan"
                    className="mb-10"
                    width={25}
                    height={25}
                  />
                </Link>
              </li>
            </ul>
          </div>

          {/* Links Column */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-4">Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="hover:text-gray-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-gray-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p className="text-sm">
              52 Lincoln Highway, Suite 2B, Edison, NJ, 08820 <br />
              Email: tigerkalen@gmail.com <br />
              Phone: (732)-906-9077
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
