import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="mt-10">
      <div className="container mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex">
            <Link href="/">
              <span className="sr-only">Home</span>
              <Image
                src="/logo.png"
                alt="logo"
                width={90}
                height={0}
                loading="lazy"
              />
            </Link>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <ul className="flex space-x-4">
              <li>
                <a
                  href="/facebook-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/facebook-icon.png"
                    alt="Facebook"
                    width={25}
                    height={25}
                  />
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about">About Us</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>
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
